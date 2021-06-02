using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Domain;
using Persistence;


namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuctionController: ControllerBase
    {
        private readonly DataContext _context;

        public AuctionController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Auction>>> GetAuctions() {
            return await _context.Auctions.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Auction>> GetAuction(int id) {
            var auction = await _context.Auctions.FindAsync(id);

            if (auction == null) {
                return NotFound();
            }

            return auction;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAuction(int id, Auction auction) {
            if (id != auction.Id) {
                return BadRequest();
            }

            _context.Entry(auction).State = EntityState.Modified;

            try {
                await _context.SaveChangesAsync();
            }

            catch (DbUpdateConcurrencyException)
            {
                if (!AuctionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Auction>> PostAuction(Auction auction){
            _context.Auctions.Add(auction);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAuction", new { id = auction.Id }, auction);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<Auction>> DeleteAuction(int id)
        {
            var auction = await _context.Auctions.FindAsync(id);
            if (auction == null)
            {
                return NotFound();
            }

            _context.Auctions.Remove(auction);
            await _context.SaveChangesAsync();

            return auction;
        }

        private bool AuctionExists(int id) {
            return _context.Auctions.Any(e => e.Id == id);
        }

        
    }
}
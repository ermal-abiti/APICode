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
    public class ListingController: ControllerBase
    {
        private readonly DataContext _context;

        public ListingController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ListingController>>> GetListings() {
            return await _context.Listing.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Listing>> GetListing(int id) {
            var listing = await _context.Listings.FindAsync(id);

            if (listing == null) {
                return NotFound();
            }

            return listing;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutListing(int id, Listing listing) {
            if (id != listing.Id) {
                return BadRequest();
            }

            _context.Entry(listing).State = EntityState.Modified;

            try {
                await _context.SaveChangesAsync();
            }

            catch (DbUpdateConcurrencyException)
            {
                if (!ListingExists(id))
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
        public async Task<ActionResult<Listing>> PostListing(Listing listing){
            _context.Listings.Add(listing);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetListing", new { id = listing.Id }, listing);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<Listing>> DeleteListing(int id)
        {
            var listing = await _context.Listings.FindAsync(id);
            if (listing == null)
            {
                return NotFound();
            }

            _context.Listings.Remove(listing);
            await _context.SaveChangesAsync();

            return listing;
        }

        private bool ListingExists(int id) {
            return _context.Listings.Any(e => e.Id == id);
        }

        
    }
}
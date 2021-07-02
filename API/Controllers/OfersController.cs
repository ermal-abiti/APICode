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
    public class OfersController: ControllerBase
    {
        private readonly DataContext _context;

        public OfersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ofers>>> GetOfers() {
            return await _context.Ofers.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Ofers>> GetOfert(int id) {
            var ofers = await _context.Ofers.FindAsync(id);

            if (ofers == null) {
                return NotFound();
            }

            return ofers;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutOfert(int id, Ofers ofers) {
            if (id != ofers.Id) {
                return BadRequest();
            }

            _context.Entry(ofers).State = EntityState.Modified;

            try {
                await _context.SaveChangesAsync();
            }

            catch (DbUpdateConcurrencyException)
            {
                if (!OfertExist(id))
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
        public async Task<ActionResult<Ofers>> PostOfert(Ofers ofers){
            _context.Ofers.Add(ofers);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOfert", new { id = ofers.Id }, ofers);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<Ofers>> DeleteOfert(int id)
        {
            var ofers = await _context.Ofers.FindAsync(id);
            if (ofers == null)
            {
                return NotFound();
            }

            _context.Ofers.Remove(ofers);
            await _context.SaveChangesAsync();

            return ofers;
        }

        private bool OfertExist(int id) {
            return _context.Ofers.Any(e => e.Id == id);
        }

        
    }
}
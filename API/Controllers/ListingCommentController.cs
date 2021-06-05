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
    public class ListingCommentController: ControllerBase
    {
        private readonly DataContext _context;

        public ListingCommentController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ListingComment>>> GetListingComments() {
            return await _context.ListingComments.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ListingComment>> GetListingComment(int id) {
            var listingController = await _context.ListingComments.FindAsync(id);

            if (listingController == null) {
                return NotFound();
            }

            return listingController;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutListingComment(int id, ListingComment listingController) {
            if (id != listingController.Id) {
                return BadRequest();
            }

            _context.Entry(listingController).State = EntityState.Modified;

            try {
                await _context.SaveChangesAsync();
            }

            catch (DbUpdateConcurrencyException)
            {
                if (!ListingCommentExists(id))
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
        public async Task<ActionResult<ListingComment>> PostListingComment(ListingComment listingComment){
            _context.ListingComments.Add(listingComment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetListingComment", new { id = listingComment.Id }, listingComment);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<ListingComment>> DeleteListingComment(int id)
        {
            var listingComment = await _context.ListingComments.FindAsync(id);
            if (listingComment == null)
            {
                return NotFound();
            }

            _context.ListingComments.Remove(listingComment);
            await _context.SaveChangesAsync();

            return listingComment;
        }

        private bool ListingCommentExists(int id) {
            return _context.ListingComments.Any(e => e.Id == id);
        }

        
    }
}
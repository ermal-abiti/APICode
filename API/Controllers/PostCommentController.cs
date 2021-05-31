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
    public class PostCommentController: ControllerBase
    {
        private readonly DataContext _context;

        public PostCommentController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PostComment>>> GetPostComments() {
            return await _context.PostComments.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PostComment>> GetPostComment(int id) {
            var postComment = await _context.PostComments.FindAsync(id);

            if (postComment == null) {
                return NotFound();
            }

            return postComment;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPostComment(int id, PostComment postComment) {
            if (id != postComment.Id) {
                return BadRequest();
            }

            _context.Entry(postComment).State = EntityState.Modified;

            try {
                await _context.SaveChangesAsync();
            }

            catch (DbUpdateConcurrencyException)
            {
                if (!PostCommentExists(id))
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
        public async Task<ActionResult<PostComment>> PostPostComment(PostComment postComment){
            _context.PostComments.Add(postComment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPostComment", new { id = postComment.Id }, postComment);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<PostComment>> DeletePostComment(int id)
        {
            var postComment = await _context.PostComments.FindAsync(id);
            if (postComment == null)
            {
                return NotFound();
            }

            _context.PostComments.Remove(postComment);
            await _context.SaveChangesAsync();

            return postComment;
        }

        private bool PostCommentExists(int id) {
            return _context.PostComments.Any(e => e.Id == id);
        }

        
    }
}
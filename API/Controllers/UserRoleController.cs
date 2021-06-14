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
    public class UserRoleController: ControllerBase
    {
        private readonly DataContext _context;

        public UserRoleController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserRole>>> GetObjs() {
            return await _context.UserRoles.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UserRole>> GetObj(int id) {
            var obj = await _context.UserRoles.FindAsync(id);

            if (obj == null) {
                return NotFound();
            }

            return obj;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutObj(int id, UserRole obj) {
            if (id != obj.Id) {
                return BadRequest();
            }

            _context.Entry(obj).State = EntityState.Modified;

            try {
                await _context.SaveChangesAsync();
            }

            catch (DbUpdateConcurrencyException)
            {
                if (!ObjExists(id))
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
        public async Task<ActionResult<UserRole>> PostObj(UserRole obj){
            _context.UserRoles.Add(obj);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetObj", new { id = obj.Id }, obj);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<UserRole>> DeleteObj(int id)
        {
            var obj = await _context.UserRoles.FindAsync(id);
            if (obj == null)
            {
                return NotFound();
            }

            _context.UserRoles.Remove(obj);
            await _context.SaveChangesAsync();

            return obj;
        }

        private bool ObjExists(int id) {
            return _context.Auctions.Any(e => e.Id == id);
        }

        
    }
}
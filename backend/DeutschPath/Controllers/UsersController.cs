using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DeutschPath.Models;
using DeutschPath.Dtos;

namespace DeutschPath.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DeutschPathDbContext _context;

        public UsersController(DeutschPathDbContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(Guid id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(Guid id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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
        public async Task<IActionResult> PostUser([FromBody] SignupDto signup)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // check duplicate email (case-insensitive)
            var emailLower = signup.Email.ToLower();
            var exists = await _context.Users.AnyAsync(u => u.Email.ToLower() == emailLower);
            if (exists)
                return Conflict(new { message = "A user with this email already exists." });

            // create the User entity
            var user = new User
            {
                Id = Guid.NewGuid(),              // ensure unique id
                Name = signup.Name,
                Email = signup.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(signup.Password),
                AvatarUrl = null,
                CurrentLevel = "A1",             // default, change if needed
                Goals = null,
                CreatedAt = DateTime.UtcNow
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            // Return a safe representation without the password hash
            var result = new
            {
                id = user.Id,
                name = user.Name,
                email = user.Email,
                avatarUrl = user.AvatarUrl,
                currentLevel = user.CurrentLevel,
                goals = user.Goals,
                createdAt = user.CreatedAt
            };

            return CreatedAtAction("GetUser", new { id = user.Id }, result);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(Guid id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}

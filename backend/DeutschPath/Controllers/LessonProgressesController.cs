using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DeutschPath.Models;

namespace DeutschPath.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LessonProgressesController : ControllerBase
    {
        private readonly DeutschPathDbContext _context;

        public LessonProgressesController(DeutschPathDbContext context)
        {
            _context = context;
        }

        // GET: api/LessonProgresses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LessonProgress>>> GetLessonProgresses()
        {
            return await _context.LessonProgresses.ToListAsync();
        }

        // GET: api/LessonProgresses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LessonProgress>> GetLessonProgress(int id)
        {
            var lessonProgress = await _context.LessonProgresses.FindAsync(id);

            if (lessonProgress == null)
            {
                return NotFound();
            }

            return lessonProgress;
        }

        [HttpGet("calculate/{userId}")]
        public async Task<ActionResult<Dictionary<string, double>>> CalculateLesssonProgress(Guid userId)
        {
            // id is userId, not lessonProgressId
            // userId is now Guid, use directly

            // Example: calculate for all levels
            var levels = new Dictionary<string, int> {
                { "a1", 18 }, { "a2", 21 }, { "b1", 21 }, { "b2", 21 }
            };
            var result = new Dictionary<string, double>();
            foreach (var kvp in levels)
            {
                var completedLessons = await _context.LessonProgresses
                    .Where(lp => lp.UserId == userId && lp.LessonId.ToLower().StartsWith(kvp.Key))
                    .Select(lp => lp.LessonId)
                    .Distinct()
                    .CountAsync();
                var progress = kvp.Value > 0 ? (completedLessons / (double)kvp.Value) * 100.0 : 0.0;
                result[kvp.Key] = progress;
            }
            return Ok(result);
        }

        // PUT: api/LessonProgresses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLessonProgress(int id, LessonProgress lessonProgress)
        {
            if (id != lessonProgress.Id)
            {
                return BadRequest();
            }

            _context.Entry(lessonProgress).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LessonProgressExists(id))
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

        // POST: api/LessonProgresses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<LessonProgress>> PostLessonProgress([FromBody] DeutschPath.Dtos.LessonProgressDto dto)
        {
            if (dto == null || dto.UserId == Guid.Empty || string.IsNullOrWhiteSpace(dto.LessonId))
            {
                return BadRequest("Missing required fields: userId, lessonId, completedAt");
            }
            var newProgress = new LessonProgress
            {
                UserId = dto.UserId,
                LessonId = dto.LessonId,
                CompletedAt = dto.CompletedAt
            };
            _context.LessonProgresses.Add(newProgress);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetLessonProgress", new { id = newProgress.Id }, newProgress);
        }

        // DELETE: api/LessonProgresses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLessonProgress(int id)
        {
            var lessonProgress = await _context.LessonProgresses.FindAsync(id);
            if (lessonProgress == null)
            {
                return NotFound();
            }

            _context.LessonProgresses.Remove(lessonProgress);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LessonProgressExists(int id)
        {
            return _context.LessonProgresses.Any(e => e.Id == id);
        }
    }
}

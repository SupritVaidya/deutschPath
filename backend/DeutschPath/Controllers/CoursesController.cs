using Microsoft.AspNetCore.Mvc;
using DeutschPath.Models;
using System.Linq;

namespace DeutschPath.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursesController : ControllerBase
    {
        private readonly DeutschPathDbContext _db;
        public CoursesController(DeutschPathDbContext db) { _db = db; }

        [HttpGet]
        public IActionResult GetCourses()
        {
            var courses = _db.Courses.ToList(); // Ensure Courses DbSet exists in DbContext
            return Ok(courses);
        }
    }
}

// Controllers/AuthController.cs
using Microsoft.AspNetCore.Mvc;
using DeutschPath.Dtos;
using DeutschPath.Services;

namespace DeutschPath.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        /// <summary>
        /// Login endpoint - verifies user credentials and returns JWT + user info.
        /// POST /api/auth/login
        /// </summary>
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var (success, token, user, error) = await _authService.LoginAsync(dto.Email, dto.Password);

            if (!success)
            {
                // generic error so we don't reveal which part failed
                return Unauthorized(new { message = error ?? "Invalid credentials" });
            }

            return Ok(new
            {
                token,
                expiresAt = DateTime.UtcNow.AddMinutes(60),
                user = new
                {
                    id = user!.Id,
                    email = user.Email,
                    name = user.Name,
                    level = user.CurrentLevel
                }
            });
        }
    }
}

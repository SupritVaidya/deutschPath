// Services/AuthService.cs
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using DeutschPath.Models;

namespace DeutschPath.Services
{
    public class AuthService : IAuthService
    {
        private readonly DeutschPathDbContext _db;
        private readonly IConfiguration _config;

        public AuthService(DeutschPathDbContext db, IConfiguration config)
        {
            _db = db;
            _config = config;
        }

        public async Task<(bool Success, string Token, User? User, string? Error)> LoginAsync(string email, string password)
        {
            if (string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(password))
                return (false, string.Empty, null, "Invalid credentials");

            var user = await _db.Users
                .AsNoTracking()
                .SingleOrDefaultAsync(u => u.Email.ToLower() == email.ToLower());

            if (user == null)
            {
                return (false, string.Empty, null, "Invalid credentials");
            }

            bool passOk;
            try
            {
                passOk = BCrypt.Net.BCrypt.Verify(password, user.PasswordHash);
            }
            catch
            {
                passOk = false;
            }

            if (!passOk)
            {
                return (false, string.Empty, null, "Invalid credentials");
            }

            var token = GenerateJwtToken(user);
            return (true, token, user, null);
        }

        private string GenerateJwtToken(User user)
        {
            var jwtSection = _config.GetSection("Jwt");
            var key = jwtSection.GetValue<string>("Key") ?? throw new InvalidOperationException("Jwt:Key not configured");
            var issuer = jwtSection.GetValue<string>("Issuer") ?? "DeutschPath";
            var audience = jwtSection.GetValue<string>("Audience") ?? "DeutschPathClient";
            var expireMinutes = int.TryParse(jwtSection.GetValue<string>("ExpireMinutes"), out var m) ? m : 60;

            var keyBytes = Encoding.UTF8.GetBytes(key);
            var securityKey = new SymmetricSecurityKey(keyBytes);
            var creds = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim("displayName", user.Name ?? string.Empty)
            };

            var token = new JwtSecurityToken(
                issuer: issuer,
                audience: audience,
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(expireMinutes),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}

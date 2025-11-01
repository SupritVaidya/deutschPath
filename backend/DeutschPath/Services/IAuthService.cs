// Services/IAuthService.cs
using DeutschPath.Models;

namespace DeutschPath.Services
{
    public interface IAuthService
    {
        /// <summary>
        /// Validates the user credentials and returns a token + user info if successful.
        /// </summary>
        Task<(bool Success, string Token, User? User, string? Error)> LoginAsync(string email, string password);
    }
}

// Dtos/SignupDto.cs
using System.ComponentModel.DataAnnotations;

namespace DeutschPath.Dtos
{
    public class SignupDto
    {
        [Required]
        public string Name { get; set; } = null!;

        [Required]
        [EmailAddress]
        public string Email { get; set; } = null!;

        [Required]
        [MinLength(8, ErrorMessage = "Password must be at least 8 characters long.")]
        public string Password { get; set; } = null!;
    }
}

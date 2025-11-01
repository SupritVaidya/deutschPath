// Models/User.cs
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace DeutschPath.Models
{
    public partial class User
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; } = null!;

        [Required]
        [EmailAddress]
        public string Email { get; set; } = null!;

        // Ensure password hashes are never returned in API JSON
        [Required]
        [JsonIgnore]
        public string PasswordHash { get; set; } = null!;

        public string? AvatarUrl { get; set; }

        [Required]
        public string CurrentLevel { get; set; } = null!;

        public string? Goals { get; set; }

        public DateTime CreatedAt { get; set; }

        public virtual ICollection<LessonProgress> LessonProgresses { get; set; } = new List<LessonProgress>();
    }
}

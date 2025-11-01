using System;

namespace DeutschPath.Dtos
{
    public class LessonProgressDto
    {
        public Guid UserId { get; set; }
        public string LessonId { get; set; } = null!;
        public DateTime CompletedAt { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace DeutschPath.Models;

public partial class LessonProgress
{
    public int Id { get; set; }

    public Guid UserId { get; set; }

    public string LessonId { get; set; } = null!;

    public DateTime CompletedAt { get; set; }

    public virtual User? User { get; set; }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DeutschPath.Models
{
    public class Course
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Level { get; set; }
        // Add other properties as needed
    }
}

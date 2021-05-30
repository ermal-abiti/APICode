using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Domain
{
    public class BlogPost
    {        
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }

        [DataType(DataType.Date)]
        public DateTime DatePosted { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}
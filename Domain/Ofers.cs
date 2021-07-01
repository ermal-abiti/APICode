using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Domain
{
    public class Ofers
    {        
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; } 

        public string Category { get; set; } 
                   
        public float Price { get; set; }

        [DataType(DataType.Date)]
        public DateTime DatePosted { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }        
    }
}
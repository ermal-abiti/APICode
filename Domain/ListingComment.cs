using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class ListingComments
    {
        public String Emri {get; set;}
        public String Content{get; set;}

       [DataType(DataType.Date)]
        public DateTime DatePosted { get; set; }
        
        public int BlogPostId { get; set; }
        public BlogPost BlogPost { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
        
    }
}
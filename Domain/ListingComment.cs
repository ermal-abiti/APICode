using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class ListingComment
    {
        public int Id { get; set; }
        
        public String content {get; set;}
        

        [DataType(DataType.Date)]
        public DateTime DatePosted { get; set; }

        public int ListingId { get; set; }
        public Listing Listing { get; set; }

        public int UserId { get; set; }
        public User User {get;set;}
    }
}
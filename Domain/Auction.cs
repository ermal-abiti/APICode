using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Domain{
    public class Auction{
        public int Id {get; set;}
        public string Title { get; set; }
        public float StartingPrice {get; set;}


        [DataType(DataType.Date)]
        public DateTime Deadline { get; set; } 

        public int ListingId {get;set;}
        public Listing Listing {get;set;}

    }   
}
using System;
<<<<<<< HEAD
using System.Collections.Generic;
=======
>>>>>>> daa4c117c886af8671c685192ffb36d001e70119
using System.ComponentModel.DataAnnotations;

namespace Domain
{
<<<<<<< HEAD
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
        
=======
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
>>>>>>> daa4c117c886af8671c685192ffb36d001e70119
    }
}
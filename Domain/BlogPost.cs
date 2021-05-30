using System;

namespace Domain
{
    public class BlogPost
    {        
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        [DataType(DataType.Date)]
        public DateTime DatePosted { get; set; }

        public User User { get; set;}

    }
}
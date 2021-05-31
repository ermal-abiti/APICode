using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class PostComment

    {
        public int Id { get; set; }
        
        public String content {get; set;}
        

        [DataType(DataType.Date)]
        public DateTime DatePosted { get; set; }

        public int BlogPostId { get; set; }
        public BlogPost BlogPost { get; set; }

  
   }
   
}

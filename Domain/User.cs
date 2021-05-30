using System;
using System.Collections.Generic;

namespace Domain
{
    public class User

    {
        public int Id { get; set; }
        public String Username { get; set; }
        public String Password { get; set; }
        public String Email { get; set; }

        public UserProfile Profile { get; set; }

        public List<BlogPost> BlogPosts { get; set; }


   }

}

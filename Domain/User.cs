using System;

namespace Domain
{
    public class User

    {
        public int Id { get; set; }
        public String Username { get; set; }
        public String Password { get; set; }
        public String Email { get; set; }

        public UserProfile Profile { get; set; }
   }
}

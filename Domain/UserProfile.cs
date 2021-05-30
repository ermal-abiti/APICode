using System;

namespace Domain
{
    public class UserProfile

    {
        public int Id { get; set; }

        public String Bio { get; set; }
        public String AvatarUrl { get; set; }
        public String Birthday { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}

using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class UserRole: IdentityRole

    {
        public int Id { get; set; }
        public String Name { get; set; }

        public List<User> Users { get; set; }

   }

}

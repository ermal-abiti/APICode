using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class User: IdentityUser

    {
        public int Id { get; set; }
        public String UserName { get; set; }
        
        [JsonIgnore]
        public String Password {get;set;}

        public String Email { get; set; }

        public int UserRoleId {get; set;}
        public UserRole UserRole {get; set;}

        public UserProfile Profile { get; set; }

        public List<BlogPost> BlogPosts { get; set; }
        public List<Listing> Listings{ get; set; }


        public List<PostComment> PostComments { get; set; }

   }

}

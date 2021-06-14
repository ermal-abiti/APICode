using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public abstract class User: IdentityUser

    {

        public String FirstName {get; set;}
        public String LastName {get;set;}
        public abstract String Role { get; set; }

        public UserProfile Profile { get; set; }

        


        public List<PostComment> PostComments { get; set; }

   }

    public class Admin: User {
        public override String Role {get;set;} = "Admin";
    }

    public class Seller: User {
        public override String Role {get;set;} = "Seller";

        public List<BlogPost> BlogPosts { get; set; }
        public List<Listing> Listings{ get; set; }
    }

    public class Client: User {
        public override String Role {get;set;} = "Client";
    }

}

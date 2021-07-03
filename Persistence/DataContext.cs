using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions options): base(options) {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.Entity<BlogPost>()
                .HasOne(b => b.User)
                .WithMany(u => u.BlogPosts)
                .HasForeignKey(b => b.UserId);
            
            modelBuilder.Entity<User>(entity=>{entity.HasIndex(e=>e.UserName).IsUnique();});
            modelBuilder.Entity<User>(entity=>{entity.HasIndex(e=>e.Email).IsUnique();});
        }

        public DbSet<Value> Values { get; set; }
        public DbSet<UserRole> UserRoles {get;set;}
        public DbSet<User> Users { get; set;}
        public DbSet<UserProfile> UserProfiles { get; set; } 
        public DbSet<BlogPost> BlogPosts { get;set; }

        public DbSet<Ofers> Ofers { get; set; }
        public DbSet<Listing> Listings{ get;set; }
        public DbSet<PostComment> PostComments { get;set; }
        public DbSet<Auction> Auctions { get;set; }
        public DbSet<ListingComment> ListingComments { get;set; }
        public DbSet<ListingRating> ListingRatings { get; set; }

    }
}

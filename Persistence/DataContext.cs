﻿using System;
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
        }

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set;}
        public DbSet<UserProfile> UserProfiles { get; set; } 
        public DbSet<BlogPost> BlogPosts { get;set; }
        public DbSet<Listing> Listings{ get;set; }
        public DbSet<PostComment> PostComments { get;set; }
        public DbSet<Auction> Auctions { get;set; }
    }
}

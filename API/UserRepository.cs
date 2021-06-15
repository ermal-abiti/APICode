using System;
using Domain;
using Persistence;


namespace API
{
    public class UserRepository: IUserRepository
    {
        private readonly DataContext _context;
        public UserRepository(DataContext context) {
            _context = context;
        }
        public User Create(User user){
            _context.Users.Add(user);
            user.Id = _context.SaveChanges();
            return user;
        }
    }
}
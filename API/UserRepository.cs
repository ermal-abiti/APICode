using System;
using System.Linq;
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

        public User GetByUsername(string username) {
            return _context.Users.FirstOrDefault(u=>u.UserName == username);
        }

        public User GetById(int id) {
            return _context.Users.FirstOrDefault(u=>u.Id == id);
        }
    }
}
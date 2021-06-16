using System;
using Domain;


namespace API
{
    public interface IUserRepository
    {
        User Create(User user);
        User GetByUsername(string username);
        User GetById(int id);
    }
}
using System;
using Domain;


namespace API
{
    public interface IUserRepository
    {
        User Create(User user);
    }
}
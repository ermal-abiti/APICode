using System;
using Microsoft.AspNetCore.Mvc;
using API.Dtos;
using Domain;


namespace API.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController: Controller
    {
        private readonly IUserRepository _repository;
        
        public AuthController(IUserRepository repository){ 
            _repository = repository;
        }

        [HttpPost("register")]
        public IActionResult Register(RegisterDto dto) {
            var user = new User {
                UserName = dto.UserName,
                Email = dto.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password),
                UserRoleId = dto.UserRoleId
            };
            
            return Created("success", _repository.Create(user));
        }

    }
}
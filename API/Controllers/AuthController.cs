using System;
using Microsoft.AspNetCore.Mvc;
using API.Dtos;
using Domain;
using API.Helpers;

namespace API.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController: Controller
    {
        private readonly IUserRepository _repository;
        private readonly JwtService _jwtService;
        
        public AuthController(IUserRepository repository, JwtService jwtService){ 
            _repository = repository;
            _jwtService = jwtService;
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

        [HttpPost("login")]
        public IActionResult Login(LoginDto dto) {
            var user = _repository.GetByUsername(dto.UserName);
            if (user == null) return BadRequest(new {message="Invalid Credentials"});

            if(!BCrypt.Net.BCrypt.Verify(dto.Password, user.Password)) {
                return BadRequest(new {message="Invalid Password"});
            }

            var jwt = _jwtService.Generate(user.Id);
            Response.Cookies.Append("jwt", jwt, new Microsoft.AspNetCore.Http.CookieOptions{
                HttpOnly = true
            });
            return Ok(new {
                message = "user logged in successfully"
            });

        }

        [HttpGet("loggeduser")]
        public IActionResult User() {
            try {
                var jwt = Request.Cookies["jwt"];

                var token = _jwtService.Verify(jwt);
                
                int userId = int.Parse(token.Issuer);
                
                var user = _repository.GetById(userId);

                return Ok(user);
            }
            catch (Exception e) {
                return Unauthorized();
            }
        }

        [HttpPost("logout")]
        public IActionResult Logout() {
            Response.Cookies.Delete("jwt");
            return Ok(new {
                message = "Logout success!"
            });
        }

    }
}
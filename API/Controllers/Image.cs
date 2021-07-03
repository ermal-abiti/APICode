using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Domain;
using Persistence;
using ImageDTO;


namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [HttpPost("CreateImage")]
    public void CreateImage([FromBody] ImageDTO img)
    {
        Image image = new Image { FileName = img.FileName };
        byte[] imageData = null;
        using (var binaryReader = new BinaryReader(img.Image.OpenReadStream()))
        {
            imageData = binaryReader.ReadBytes((int)img.Image.Length);
        }
        image.Picture = imageData;

        imageRepo.Create(image);

    }
}
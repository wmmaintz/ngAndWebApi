using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ngAndWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        // GET: api/image
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "image1", "image2" };
        }

        // GET api/image/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "image" + id.ToString();
        }

        // POST api/image
        [HttpPost]
        public string Post([FromBody] string value)
        {
            return "Adding image value [" + value + "]";
        }

        // PUT api/image/5
        [HttpPut("{id}")]
        public string Put(int id, [FromBody] string value)
        {
            return "Updating image id [" + id.ToString() + "] with [" + value + "]";
        }

        // DELETE api/image/5
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return "Deleting image [" + id.ToString() + "]";
        }
    }
}

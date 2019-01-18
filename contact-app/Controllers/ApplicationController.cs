using System.Collections.Generic;
using System.Linq;
using contact_app.Models;
using Microsoft.AspNetCore.Mvc;

namespace contact_app.Controllers
{
    [Route ("api/[controller]")]
    public class ApplicationController:Controller
    {
         private readonly ContactAppContext _context;
         public ApplicationController(ContactAppContext context)
         {
             _context = context;
         }
        [HttpGet]
        [Route ("GetAll")]
        public IEnumerable<Application> GetAll () {
            // fetch all contact records  
            return _context.Application.ToList();
        }

        [HttpGet ("{clientId}")]
        [Route ("GetById")]
        public IActionResult GetById (string clientId) {
            // filter contact records by contact id  
            var item = _context.Application.FirstOrDefault (t => t.ClientID == clientId);
            if (item == null) {
                return NotFound ();
            }
            return new ObjectResult (item);
        }

        [HttpPost]
        [Route ("Create")]
        public IActionResult Create ([FromBody] Application item) {
            // set bad request if contact data is not provided in body  
            if (item == null) {
                return BadRequest ();
            }
            _context.Application.Add (new Application {
                ClientID = item.ClientID,
                    ClientName = item.ClientName,
                    ClientUri = item.ClientUri,
                    Secret = item.Secret,
                    RedirectUri = item.RedirectUri,
                    PostLogoutRedirectUri = item.PostLogoutRedirectUri
            });
            _context.SaveChanges ();
            return Ok (new {
                message = "Application is added successfully."
            });
        }

        [HttpPut ("{id}")]
        [Route ("Update")]
        public IActionResult Update (string clientId, [FromBody] Application item) {
            // set bad request if contact data is not provided in body  
            if (item == null || clientId == "") {
                return BadRequest ();
            }
            var application = _context.Application.FirstOrDefault (t => t.ClientID == clientId);
            if (application == null) {
                return NotFound ();
            }            
            application.ClientName = item.ClientName;
            application.ClientUri = item.ClientUri;
            application.Secret = item.Secret;
            application.RedirectUri = item.RedirectUri;
            application.PostLogoutRedirectUri = item.PostLogoutRedirectUri;
            _context.Application.Update (application);
            _context.SaveChanges ();
            return Ok (new {
                message = "Application is updated successfully."
            });
        }

        [HttpDelete ("{clientId}")]
        [Route ("Delete")]
        public IActionResult Delete (string clientId) {
            var application = _context.Application.FirstOrDefault (t => t.ClientID == clientId);
            if (application == null) {
                return NotFound ();
            }
            _context.Application.Remove (application);
            _context.SaveChanges ();
            return Ok (new {
                message = "Application is deleted successfully."
            });
        }
        
    }
}
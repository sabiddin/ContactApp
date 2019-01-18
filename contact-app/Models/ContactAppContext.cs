using Microsoft.EntityFrameworkCore;

namespace contact_app.Models {
    public class ContactAppContext : DbContext {
        public ContactAppContext (DbContextOptions<ContactAppContext> options) : base (options) { }
        public DbSet<Application> Application {
             get;
             set; 
             }
        public DbSet<Contact> Contact {
            get;
            set;
        }
    }
}
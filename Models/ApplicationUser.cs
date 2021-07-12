using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngAndWebApi.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser() {
            DateTime dtn = DateTime.UtcNow;
            this.DateCreated = dtn;
            this.LastModifiedDT = dtn;
            this.LastModifiedBy = UserName;
        }

        public string Salutation { get; set; }
        public string LastName { get; set; }
        public string MI { get; set; }
        public string FirstName { get; set; }
        public string Suffix { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime LastModifiedDT { get; set; }
        public string LastModifiedBy { get; set; }

        public void DisplayProperties(ApplicationUser applicationUser)
        {
            Console.WriteLine("IdentityUser.Id                   = [" + applicationUser.Id + "]");
            Console.WriteLine("IdentityUser.UserName             = [" + applicationUser.UserName + "]");
            Console.WriteLine("IdentityUser.NormalizedUserName   = [" + applicationUser.NormalizedUserName + "]");
            Console.WriteLine("IdentityUser.Email                = [" + applicationUser.Email + "]");
            Console.WriteLine("IdentityUser.NormalizedEmail      = [" + applicationUser.NormalizedEmail + "]");
            Console.WriteLine("IdentityUser.EmailConfirmed       = [" + applicationUser.EmailConfirmed + "]");
            Console.WriteLine("IdentityUser.PasswordHash         = [" + applicationUser.PasswordHash + "]");
            Console.WriteLine("IdentityUser.SecurityStamp        = [" + applicationUser.SecurityStamp + "]");
            Console.WriteLine("IdentityUser.TwoFactorEnabled     = [" + applicationUser.TwoFactorEnabled + "]");
            Console.WriteLine("IdentityUser.PhoneNumber          = [" + applicationUser.PhoneNumber + "]");
            Console.WriteLine("IdentityUser.PhoneNumberConfirmed = [" + applicationUser.PhoneNumberConfirmed + "]");
            Console.WriteLine("IdentityUser.AccessFailedCount    = [" + applicationUser.AccessFailedCount + "]");
            Console.WriteLine("IdentityUser.ConcurrencyStamp     = [" + applicationUser.ConcurrencyStamp + "]");
            Console.WriteLine("IdentityUser.LockoutEnabled       = [" + applicationUser.LockoutEnabled + "]");
            Console.WriteLine("IdentityUser.LockoutEnd           = [" + applicationUser.LockoutEnd + "]");
            Console.WriteLine();
            Console.WriteLine("ApplicationUser.Salutation        = [" + applicationUser.Salutation + "]");
            Console.WriteLine("ApplicationUser.FirstName         = [" + applicationUser.FirstName + "]");
            Console.WriteLine("ApplicationUser.MI                = [" + applicationUser.MI + "]");
            Console.WriteLine("ApplicationUser.LastName          = [" + applicationUser.LastName + "]");
            Console.WriteLine("ApplicationUser.Suffix            = [" + applicationUser.Suffix + "]");
            Console.WriteLine("ApplicationUser.DateCreated       = [" + applicationUser.DateCreated.ToShortDateString() + "]");
            Console.WriteLine("ApplicationUser.LastModifiedDT    = [" + applicationUser.LastModifiedDT.ToShortDateString() + "]");
            Console.WriteLine("ApplicationUser.LastModifiedBy    = [" + applicationUser.LastModifiedBy + "]");
        }
    }
}

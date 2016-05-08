using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace ServerAPI.Persistence.Domain
{
    public class FancyContext : DbContext
    {

        public FancyContext() : base("FancyContext")
        {
            Database.SetInitializer<FancyContext>(new CreateDatabaseIfNotExists<FancyContext>());
        }

        public DbSet<Post> Posts { get; set; }
        public DbSet<FileFolder> FileFolders { get; set; }


        //map the name convention
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

    }
}
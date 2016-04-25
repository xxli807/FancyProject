using ServerAPI.Persistence.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerAPI.Models
{
    public class PostModel
    {
        public List<Post> Posts { get; set; }
        public int PostNumbers { get; set; }
        public string PostType { get; set; }
    }
 

}
using ServerAPI.Persistence.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ServerAPI.Persistence.Domain
{
    public class Post
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public PostType Type { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; } 

    }
}
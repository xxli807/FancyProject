using ServerAPI.Persistence.Domain;
using ServerAPI.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerAPI.Services.Implementations
{
    public class PostLogicService : IPostLogic
    {
        public void GetPosts(string name)
        {
            var ss = name;

        }

        public void SavePost(Post post)
        {
            using(var context = new FancyContext())
            {
                context.Posts.Add(new Post() { Type = post.Type, Content = post.Content });
                context.SaveChanges();
            }
        }

    }
}
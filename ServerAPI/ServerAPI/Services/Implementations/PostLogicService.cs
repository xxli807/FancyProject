using ServerAPI.Persistence.Domain;
using ServerAPI.Persistence.Enum;
using ServerAPI.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerAPI.Services.Implementations
{
    public class PostLogicService : IPostLogic
    {
        public List<Post> GetPosts(string name)
        {
            var posts = new List<Post>();
            //should always has value instead of none
            var type = PostType.None;
            Enum.TryParse<PostType>(name, out type);
            using (var context = new FancyContext())
            {
                posts = context.Posts.Where(d => d.Type == type).ToList();
            }

            return posts;

        }

        public void SavePost(Post post)
        {
            using(var context = new FancyContext())
            {
                context.Posts.Add(new Post() { Type = post.Type, Content = post.Content, Subject = post.Subject });
                context.SaveChanges();
            }
        }

    }
}
using ServerAPI.Persistence.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServerAPI.Services.Interfaces
{
    public interface IPostLogic
    {
        void GetPosts(string name);

        void SavePost(Post post);

    }
}

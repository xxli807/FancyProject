using ServerAPI.Persistence.Domain;
using ServerAPI.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerAPI.Services.Implementations
{
    public class PhotoLogicService : IPhotoLogic
    {
        public string GetPhotoFolderPath(string name)
        {
            var path = "";
            using (var context = new FancyContext())
            {


            }

            return path;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Nancy;
using ServerAPI.Services.Interfaces;

namespace ServerAPI.Modules
{
    public class HomeModule : NancyModule
    {
         

        public HomeModule(IPhotoLogic _photoLogic)
        {
            Get["/"] = parameters =>
            {
                return View["Index"];
            };


            Get["/photo/{name}"] = parameters =>
            {
                var name = parameters.name;

                var path = _photoLogic.GetPhotoFolderPath(name);


                return null;

            };
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Nancy;

namespace ServerAPI.Modules
{
    public class HomeModule : NancyModule
    {
        public HomeModule()
        {
            Get["/"] = parameters =>
            {
                return View["Index"];
            };
            
        }

    }
}
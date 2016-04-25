﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Nancy;
using ServerAPI.Services.Interfaces;
using ServerAPI.Persistence.Domain;
using Nancy.ModelBinding;

namespace ServerAPI.Modules
{
    public class BlogModule : NancyModule
    {
        public BlogModule(IPostLogic _postLogic)
        {
            Get["/blog"] = parameters =>
            {
                return View["Index"];
            };

            Get["/blog/{name}"] = parameters =>
            {
                var name = parameters.name;

                //DI to get all the post based on the name and return the value as json
                _postLogic.GetPosts(name);

                return View["Posts"];
            };

            Post["/blog/addPost"] = parameters =>
            {
                var post = this.Bind<Post>();
                _postLogic.SavePost(post);
                return Response.AsJson(new {Success = true}, HttpStatusCode.OK);

            };


        }
    }
}
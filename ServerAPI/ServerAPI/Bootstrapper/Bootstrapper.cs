﻿using Nancy;
using Nancy.Bootstrapper;
using Nancy.Bootstrappers.Ninject;
using Ninject;
using ServerAPI.Services.Implementations;
using ServerAPI.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerAPI.Bootstrapper
{
    public class Bootstrapper : NinjectNancyBootstrapper
    {
        protected override void ApplicationStartup(IKernel container, IPipelines pipelines)
        {
            // No registrations should be performed in here, however you may
            // resolve things that are needed during application startup.
            container.Bind<IPostLogic>().To<PostLogicService>();
            container.Bind<IPhotoLogic>().To<PhotoLogicService>();

            Nancy.Json.JsonSettings.MaxJsonLength = int.MaxValue;
        }

        protected override void ConfigureApplicationContainer(IKernel existingContainer)
        {
            // Perform registation that should have an application lifetime
        }

        protected override void ConfigureRequestContainer(IKernel container, NancyContext context)
        {
            // Perform registrations that should have a request lifetime
        }

        protected override void RequestStartup(IKernel container, IPipelines pipelines, NancyContext context)
        {
            // No registrations should be performed in here, however you may
            // resolve things that are needed during request startup.
        }
    }
}
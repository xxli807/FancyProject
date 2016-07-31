using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceProcess;
using System.Diagnostics;
using System.Threading;



namespace LdmServerRestart
{
    class Program
    {
        private static readonly string SERVICE_NAME = "MongoDB";
        
        static void Main(string[] args)
        {
            ServiceController sc = new ServiceController(SERVICE_NAME);
            var retrySuccessful = false;

            if(sc.Status == ServiceControllerStatus.Running)
            {
                Console.WriteLine("current service"+ SERVICE_NAME+ " status = " + sc.Status + " Do you want to stop it? Y/N");
                string result = Console.ReadLine();

                if(result.Equals("y", StringComparison.OrdinalIgnoreCase))
                {
                    sc.Stop();
                } 
            }


            if (sc.Status == ServiceControllerStatus.Stopped)
            {
                Console.WriteLine("current service" + SERVICE_NAME + " status = " + sc.Status + " Do you want to start it? Y/N");
                string result = Console.ReadLine();
                if (result.Equals("y", StringComparison.OrdinalIgnoreCase))
                {
                    int i = 0;

                    do
                    {
                        sc.Start();
                        retrySuccessful = true; 

                        ServiceController doubleConfirm = new ServiceController(SERVICE_NAME); 
                        if (doubleConfirm.Status == ServiceControllerStatus.Stopped)
                        {
                            retrySuccessful = false;
                            doubleConfirm.Start();
                        } 

                        i++;
                    } while (i < 15 && !retrySuccessful);

                    ServiceController throwException = new ServiceController(SERVICE_NAME);
                    if (throwException.Status == ServiceControllerStatus.Stopped)
                    {
                        Console.WriteLine("have tried 15 times and cannot start the service, check if all delivery systems are running");
                    }
                }
            }
              
        }
    }
}

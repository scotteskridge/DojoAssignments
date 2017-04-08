using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace MVCtemplateTIMEDISPLAY{
    public class Program{
            IWebHost host = new WebHostBuilder()
                // ContentRoot tells our webserver where to find the project files
                .UseContentRoot(Directory.GetCurrentDirectory())
                // This line tells the WebHost to use Kestrel
                .UseKestrel()
                // Completes the initialization of the WebHost
                .Build();
            // Here the WebHost starts up the web app
            host.Run();
        }
}

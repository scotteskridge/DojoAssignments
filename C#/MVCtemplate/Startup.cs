using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Logging;
 
namespace MVCtemplate{
    public class Startup{
        public void ConfigureServices(IServiceCollection services){
            // Add Mvc as a service making it available across our entire app
            services.AddMvc();
        }
        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory){
            loggerFactory.AddConsole();
            app.UseDeveloperExceptionPage();
            // Other middleware
            app.UseMvc();
            

        }// End Configure
    }
}
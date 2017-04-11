using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
namespace MVCtemplate.Controllers{
    public class MainAppController : Controller{
        [HttpGet]
        [Route("")]
        public IActionResult  Index(){
           return View("Index");
        }
        // [HttpPost]
        // [Route("other")]
        // public string Other(){
        //     return "Hello World!";
        //     // Return a view useing typre return of IActionResult
        // }

    }//End Controller
}
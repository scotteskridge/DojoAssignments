using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using System;

namespace MVCtemplate.Controllers{
    public class MainAppController : Controller{
        [HttpGet]
        [Route("")]
        public IActionResult  Index(){
            if (HttpContext.Session.GetString("GeneratedPassword") != null){
                ViewBag.GeneratedPassword = HttpContext.Session.GetString("GeneratedPassword");
            } else {
                ViewBag.GeneratedPassword = "";
            }
            return View("Index");
        }
        [HttpGet]
        [Route("Random_Password")]
        public string Random_Password(int? Password_Length = 10){
            if (Password_Length == null){
                Password_Length = 10;
            }
          
                // HttpContext.Session.SetString("GeneratedPassword", KeyGenerator.GeneratePW(Password_Length) );
          return  KeyGenerator.GeneratePW(Password_Length);
        }
        [HttpPost]
        [Route("Clear_Password")]
        public IActionResult ClearSession(){
            HttpContext.Session.Clear();
            return RedirectToAction("Index");

        }

        [HttpPost]
        [Route("Form_Data")]
        public JsonResult Form_Data(string first_name, string last_name, int age){
           var jsonobject = new {
               First_Name = first_name,
               Last_Name = last_name,
               Age = age,
               //leave room for  date
               
           };
            return Json(jsonobject);

        }

        // private string GeneratePW(int password_Length)
        // {
        //     throw new NotImplementedException();
        // }
    }//End Controller
}
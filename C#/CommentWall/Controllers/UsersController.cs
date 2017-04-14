using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CommentWall.Models;
using Microsoft.AspNetCore.Mvc;


namespace CommentWall.Controllers
{
    public class UsersController : Controller
    {
        private readonly DbConnector _dbConnector;
        public  UsersController(DbConnector connect)
        {
            _dbConnector = connect;
        }
        // GET: /Home/
        [HttpGet]
        [Route("StartLogin")]
        public IActionResult StartLogin(){
            List<Dictionary<string, object>> AllUsers = _dbConnector.Query("SELECT * FROM users");
            return View("Login");
        }

        [HttpPost]
        [Route("Login")]
        
        public IActionResult Login(string email, string pw){
            if  (email == null || pw == null){
                ViewBag.errors = "Please enter an email and password";
                return View("Login");
            }
            else{
                string QueryString = $"SELECT * FROM users WHERE email ='{email}'";
                Dictionary<string, object> checkuser = _dbConnector.Query(QueryString).SingleOrDefault();
                if(checkuser != null ){
                    if(pw == (string)checkuser["pw"]){
                        //passwords match
                        return RedirectToAction("Success", "Users");
                    } 
                    else{
                        //passwords dont match
                        ViewBag.errors = "Email and Password don't match";
                        return View("Login");
                    } 
                }
                ViewBag.errors = "Invalid user name please register";
                return View("Login");
            }
        }

        [HttpPost]
        [Route("Register")]
        public IActionResult Register(User user){
            if (ModelState.IsValid){
                Dictionary<string, object> checkuser = _dbConnector.Query($"SELECT * FROM users WHERE email ='{user.email}'").SingleOrDefault();
                    if (checkuser != null){
                         //then add extra errors
                        ViewBag.errors = "Email must be unique";
                        return View("Login", user);
                    }
                    //if is a new user
                        //hash the password
                        //create a new user add them to the database and route to success
                    string QueryString = $"INSERT INTO users (first_name, last_name, email, pw, created_at, updated_at) VALUES ('{user.first_name}','{user.last_name}', '{user.email}', '{user.pw}', NOW(), NOW())";
                     _dbConnector.Execute(QueryString);   
                return RedirectToAction("Success", "Users");
            } else{
               // kick the user object back to the view to display errors 
                 
                return View("Login", user);

            }
        }

        [HttpGet]
        [Route("Success")]
        public IActionResult Success(){
            //add user id to session and route to dashboard
            
            return RedirectToAction("Dashboard", "Home");
        }
        
        [HttpGet]
        [Route("Logout")]
        public IActionResult Logout(){
            HttpContext.Session.Clear();
            return RedirectToAction("StartLogin");
        }
    }
}

using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CommentWall.Controllers{
    public class Home : Controller{
        private readonly DbConnector _dbConnector;
        public  Home(DbConnector connect)
        {
            _dbConnector = connect;
        }
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Dashboard() {
            //if no user in session reroute to login
            List<Dictionary<string, object>> AllUsers = _dbConnector.Query("SELECT * FROM users");

            return View("Dashboard");
        }

        [HttpGet]
        [Route("PostMessage")]
        public IActionResult PostMessage() {
            //if no user in session reroute to login

            return RedirectToAction("Dashboard", "Home");
        }

        [HttpGet]
        [Route("UpdateMessage")]
        public IActionResult UpdateMessage() {
            //if no user in session reroute to login

            return RedirectToAction("Dashboard", "Home");
        }

        [HttpGet]
        [Route("DeleteMessage")]
        public IActionResult DeleteMessage() {
            //if no user in session reroute to login

            return RedirectToAction("Dashboard", "Home");
        }



        
    }
}

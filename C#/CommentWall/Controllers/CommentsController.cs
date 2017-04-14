using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CommentWall.Controllers
{
    public class Comments : Controller
    {
        private readonly DbConnector _dbConnector;
        public  Comments(DbConnector connect)
        {
            _dbConnector = connect;
        }
        
        [HttpGet]
        [Route("PostComment")]
        public IActionResult PostComment() {
            //if no user in session reroute to login

            return RedirectToAction("Dashboard");
        }

        [HttpGet]
        [Route("UpdateComment")]
        public IActionResult UpdateComment() {
            //if no user in session reroute to login

            return RedirectToAction("Dashboard");
        }

        [HttpGet]
        [Route("DeleteComment")]
        public IActionResult DeleteComment() {
            //if no user in session reroute to login

            return RedirectToAction("Dashboard");
        }
    }
}

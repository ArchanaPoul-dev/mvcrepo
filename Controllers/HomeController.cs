using LogInApp.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
namespace LogInApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()

        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(LogIn logInData)

        {
            if (ModelState.IsValid)
            {
                SqlConnection sqlcon = new SqlConnection(@"Data Source=DESKTOP-2HALD25;Initial Catalog=TestDB;Trusted_Connection=true;MultipleActiveResultSets=True;User Id=sa; Password=W3lc0m3");
                string Query = "Select count(*) from LogIn where LogInId=@User";
                SqlCommand sqlcmd = new SqlCommand(Query, sqlcon);
                sqlcmd.Parameters.Add(new SqlParameter("@User", logInData.UserName));
                sqlcmd.Parameters.Add(new SqlParameter("@Pwd", logInData.Password));
                sqlcon.Open();
                int NoOfRowsAffected = (int)sqlcmd.ExecuteScalar();
                sqlcon.Close();

                if (NoOfRowsAffected > 0)
                {
                    return RedirectToAction("Home");
                }
                else
                {
                    ModelState.AddModelError("InvalidLogin", "invalid Credentials");

                }
            }
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Home()

        {
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
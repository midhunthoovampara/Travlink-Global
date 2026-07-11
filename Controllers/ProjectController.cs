using Microsoft.AspNetCore.Mvc;

namespace Cargon.Controllers
{
    public class ProjectController : Controller
    {
        public IActionResult Index() => View();
        public IActionResult Left() => View();
        public IActionResult Right() => View();
        public IActionResult Single() => View();
    }
}
using Microsoft.AspNetCore.Mvc;

namespace Cargon.Controllers
{
    public class LandingsController : Controller
    {
        public IActionResult Index() => View();
        public IActionResult Index2() => View();
        public IActionResult Index3() => View();
        public IActionResult Index4() => View();
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace InstaVerse.Controllers
{
    [Route("api/[controller]")]
    public class ScripturesController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<string> Test(List<string> s) {

            return s;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using HtmlAgilityPack;
using InstaVerse.Models;
using Microsoft.AspNetCore.Mvc;

namespace InstaVerse.Controllers
{
    [Route("api/[controller]")]
    public class ScripturesController : Controller
    {
        private string errorList = null;
        
        [HttpGet("[action]")]
        public IActionResult Get(List<string> verses) {
            
            List<string> verseCollection = new List<string>();
            List<string> errorStrings = new List<string>();

            foreach(string v in verses){
                try {
                    verseCollection = verseCollection.Concat(parse(v)).ToList();
                }
                catch(ScriptureNotFoundException e) {
                    errorStrings.Add(e.Message);
                }
            }

            ScriptureResource resource = new ScriptureResource(){
                verseCollection = verseCollection,
                errorStrings = errorStrings
            };

            return Ok(resource);
        }

        private IEnumerable<string> parse(string verseRef) {

            string link;
            List<string> verseCollection = new List<string>();

            if (verseRef.Split(':')[0].Contains('-'))
            {
                throw new ScriptureNotFoundException(verseRef);
            }

            var dic = new Dictionary<string, string>();
            dic.Add("scriptureString", verseRef);

            var data = new FormUrlEncodedContent(dic);

            using (HttpClient client = new HttpClient())
            using (HttpResponseMessage response = client.PostAsync("http://online.recoveryversion.bible/GetScripture.asp", data).Result)
            {

                link = response.RequestMessage.RequestUri.ToString();
                if (link.Contains("fcid=0") || link.Contains("lcid=0") || link.Contains("fvid=0") || link.Contains("lvid=0"))
                {
                    throw new ScriptureNotFoundException(verseRef);
                }

            }

            var html = new HtmlDocument();
            html.LoadHtml(new WebClient().DownloadString(link));
            var root = html.DocumentNode;
            var anchors = root.Descendants().Where(n => n.GetAttributeValue("class", "").Equals("verses"));


            foreach (HtmlNode n in anchors)
            {
                fixLink(n);
                string verse = ("<strong>" + verseRef.Split(':')[0] + ":</strong>");
                verse += n.InnerHtml.ToString();
                verse = verse.Replace("\r\n\t\t\t", "");
                verseCollection.Add(verse);
            }

            return verseCollection;
        }

        private void fixLink(HtmlNode n) {

            const string domainUrl = "http://online.recoveryversion.bible/";

            if(n.SelectNodes("//sup/a") == null) return;

            foreach(HtmlNode a in n.SelectNodes("//sup/a")) {

                //Links open on new page
                a.Attributes.Add("target", "_blank");

                //Append domain url to link if not present
                string hrefValue = a.Attributes["href"].Value;
                if(!hrefValue.Contains(domainUrl))
                    a.SetAttributeValue("href", domainUrl + hrefValue);

                //Hide link by default
                a.SetAttributeValue("class", "hidden");
            }
        }
    }
}
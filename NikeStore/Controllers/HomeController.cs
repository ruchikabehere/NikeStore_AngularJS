using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NikeStore.Controllers
{
    public class HomeController : Controller
    {
        NikeStoreDBEntities nikeEntity = new NikeStoreDBEntities();
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet()]
        public ActionResult GetShoe(int id)
        {
            var shoeData = (from shoes in nikeEntity.NikeStores
                           where shoes.id == id
                           select shoes).FirstOrDefault();
            return Json(shoeData, JsonRequestBehavior.AllowGet);
        }

        [HttpGet()]
        public ActionResult GetShoes()
        {
            //var shoeData = from shoes in nikeEntity.NikeStores.ToList()
            //               select shoes;
            //return Json(shoeData, JsonRequestBehavior.AllowGet);
            return Json(nikeEntity.NikeStores.ToList(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost()]
        public ActionResult Create(NikeStore nikeStore)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    nikeEntity.NikeStores.Add(nikeStore);
                    nikeEntity.SaveChanges();
                }
                return RedirectToAction("Index");
            }
            catch(Exception ex)
            {
                Console.WriteLine("Erro Message:{0}", ex.Message);
                return RedirectToAction("Index");
            }
        }

        [HttpPost()]
        public ActionResult Delete(int? id)
        {
            var x = (from s in nikeEntity.NikeStores
                     where s.id == id
                     select s).FirstOrDefault();
            nikeEntity.NikeStores.Remove(x);
            nikeEntity.SaveChanges();
            return View();
        }

        [HttpGet()]
        public ActionResult Update(int id)
        {
            return View();
        }

        [HttpPost()]
        public ActionResult Update(NikeStore nikeStore)
        {
            //NikeStore n = Json.
            var updateShoe = (from s in nikeEntity.NikeStores.ToList()
                              where s.id == nikeStore.id
                              select s).FirstOrDefault();
            updateShoe.shoeType = nikeStore.shoeType;
            nikeEntity.SaveChanges();
            return View("Index");
        }
    }
}
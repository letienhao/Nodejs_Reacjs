
import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
  // router.get('/', homeController.getHomePage);
  // router.get('/about', homeController.getAboutPage);
  router.get('/', homeController.getHomePage)
  router.get('/learn', (req, res) => {
    return res.send({ message: 'học chi lắm nào' })
  })
  // rest api

  return app.use('/', router);
}

module.exports = initWebRoutes;
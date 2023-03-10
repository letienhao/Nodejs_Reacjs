
import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get('/', homeController.getHomePage)
  router.get('/crud', homeController.getCRUD)
  router.get('/learn', (req, res) => {
    return res.send({ message: 'học chi lắm nào' })
  })
  router.post('/post-crud', homeController.postCrud)
  router.get('/get-crud', homeController.getInfoCrud)
  router.get('/edit-crud', homeController.editCrud)
  router.post('/put-crud', homeController.putCrud)
  // rest api

  return app.use('/', router);
}

module.exports = initWebRoutes;
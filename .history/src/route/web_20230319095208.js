
import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get('/crud', homeController.getCRUD)
  router.post('/post-crud', homeController.postCrud)
  router.get('/get-crud', homeController.getInfoCrud)
  router.get('/edit-crud', homeController.editCrud)
  router.post('/put-crud', homeController.putCrud)
  router.get('/delete-crud', homeController.deleteCrud)
  // rest api
  router.post('/login', userController.UserLogin)
  return app.use('/', router);
}

module.exports = initWebRoutes;
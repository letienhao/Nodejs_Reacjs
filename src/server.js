import express from "express";
import bodyParser from "body-parser";
import * as dotenv from 'dotenv'
import connectDB from "./config/connectDB";
let viewEngine = require("./config/viewEngine");
import initWebRoutes from './route/web';
dotenv.config();
let app = express();
//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
viewEngine(app);
initWebRoutes(app);
connectDB()

let port = process.env.PORT || 6969;
//Port === undefined => port = 6969
app.listen(port, () => {
  //callback
  console.log("Backend Nodejs is runing on the port : " + port)
})
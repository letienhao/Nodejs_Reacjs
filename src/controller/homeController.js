import CRUDService from '../services/CRUDService'
import db from '../models/index'
let homeController = async (req, res) => {
  try {
    let data = await db.User.findAll({
      row: true
    })
    console.log(data);
    return res.render('home.ejs', { data: JSON.stringify(data) })

  } catch (error) {
    console.log(error);
  }
}
let getCRUD = (req, res) => {
  return res.render("crud.ejs")
}
let postCrud = async (req, res) => {
  let message = await CRUDService(req.body)
  console.log(message);
}
let getInfoCrud = async (req, res) => {
  let data = await CRUDService.getAllUser()
  return res.render("displayCrud.ejs", { data: data })
}
module.exports = {
  getHomePage: homeController,
  getCRUD: getCRUD,
  postCrud: postCrud,
  getInfoCrud: getInfoCrud,
}
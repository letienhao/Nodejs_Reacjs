import CRUDService from '../services/CRUDService'
import db from '../models/index'
let homeController = async (req, res) => {
  try {
    let data = await db.User.findAll()
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
module.exports = {
  getHomePage: homeController,
  getCRUD: getCRUD,
  postCrud: postCrud
}
import CRUDService from '../services/CRUDService'
import db from '../models/index'
let homeController = async (req, res) => {
  try {
    let data = await db.User.findAll({
      row: true
    })
    return res.render('home.ejs', { data: JSON.stringify(data) })
  } catch (error) {
    console.log(error);
  }
}
let getCRUD = (req, res) => {
  return res.render("crud.ejs")
}
let postCrud = async (req, res) => {
  await CRUDService(req.body)
}
let getInfoCrud = async (req, res) => {
  let data = await CRUDService.getAllUser()
  return res.render("displayCrud.ejs", { data: data })
}
let editCrud = async (req, res) => {
  const data = await CRUDService.getValueEdit(req.query.id)
  return res.render("editCrud.ejs", { dataEdit: data })
}
let putCrud = async (req, res) => {
  let data = req.body;
  const dataUpdate = await CRUDService.updateUser(data)
  return res.render('displayCrud.ejs', { data: dataUpdate })
}
module.exports = {
  getHomePage: homeController,
  getCRUD: getCRUD,
  postCrud: postCrud,
  getInfoCrud: getInfoCrud,
  editCrud: editCrud,
  putCrud: putCrud
}
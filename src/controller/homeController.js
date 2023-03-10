import CRUDService from '../services/CRUDService'
let getCRUD = (req, res) => {
  return res.render("crud.ejs")
}
let postCrud = async (req, res) => {
  await CRUDService.createNewUser(req.body)
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
let deleteCrud = async (req, res) => {
  console.log(req.query.id);
  let data = await CRUDService.deleteCrud(req.query.id)
  return res.render("displayCrud.ejs", { data: data })
}
module.exports = {
  getCRUD: getCRUD,
  postCrud: postCrud,
  getInfoCrud: getInfoCrud,
  editCrud: editCrud,
  putCrud: putCrud,
  deleteCrud: deleteCrud
}
const db = require("../models");

let handleUserLogin = (email, password) => {

}
let checkUserEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ email: email })
    } catch (error) {
      reject(error);
    }
  })
}
module.exports = {
  handleUserLogin: handleUserLogin
}
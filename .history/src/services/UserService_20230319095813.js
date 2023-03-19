const db = require("../models");

let handleUserLogin = (email, password) => {

}
let checkUserEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { email: email } })
      if (user) {
        resolve(true)
      }
    } catch (error) {
      reject(error);
    }
  })
}
module.exports = {
  handleUserLogin: handleUserLogin
}
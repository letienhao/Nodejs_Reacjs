const db = require("../models");

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userExit = await checkUserEmail(email)
      if (userExit) {
        //user already exit 
        //compare password
      }
    } catch (error) {
      reject(error);
    }
  })
}
let checkUserEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { email: email } })
      if (user) {
        resolve(true)
      }
      else {
        resolve(false)
      }
    } catch (error) {
      reject(error);
    }
  })
}
module.exports = {
  handleUserLogin: handleUserLogin
}
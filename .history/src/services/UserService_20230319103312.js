const db = require("../models");
const bcrypt = require('bcryptjs');
let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {}
      let userExit = await checkUserEmail(email)
      if (userExit) {
        //user already exit 
        let user = await db.User.findOne({ where: { email: email } })
        console.log(user);
        if (user) {
          // console.log(user.dataValu, "data 13213");
          //compare password
          let check = await bcrypt.compareSync(password, user.password)
          if (check) {
            userData.errCode = 0;
            userData.errMessage = 'Ok';
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = 'Invalid password';
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = 'User not found'
        }
      }
      else {
        //return error
        userData.errCode = 1;
        userData.errMessage = `Your's email is not exist in your system .Please  try other email`
        resolve(userData);
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
      console.log(user);
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
// let comparePasswords = (passwords) => {
//   return new Promise((resolve, reject) => {
//     try {

//     } catch (error) {
//       reject(error);
//     }
//   })
// }
module.exports = {
  handleUserLogin: handleUserLogin
}
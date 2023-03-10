
import db from '../models/index'
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFormByCrypt = await hashUserPass(data.password)
      await db.User.create({
        email: data.email,
        passWord: hashPasswordFormByCrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        address: data.address,
        gender: data.gender === 1 ? true : false,
        roleId: data.roleId,
      })
      resolve("create new user success!!!")
    } catch (error) {
      reject(error);
    }
  })
}
let hashUserPass = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword)
    } catch (error) {
      reject(error);
    }
  })
}
let getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findAll()
      console.log(user);
      resolve(user)
    } catch (error) {
      reject(error);
    }
  })
}
module.exports = {
  createNewUser: createNewUser,
  getAllUser: getAllUser
}
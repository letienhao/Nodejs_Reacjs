
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
      resolve(user)
    } catch (error) {
      reject(error);
    }
  })
}
let getValueEdit = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const infoUser = await db.User.findByPk(id)
      resolve(infoUser)
    } catch (error) {
      console.log(error);
    }
  })
}
let updateUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const dataUpdate = await db.User.findOne({ where: { id: data.id } })
      if (dataUpdate) {
        dataUpdate.firstName = data.firstName,
          dataUpdate.lastName = data.lastName,
          dataUpdate.email = data.email,
          dataUpdate.phoneNumber = data.phoneNumber,
          dataUpdate.address = data.address
        await dataUpdate.save()
        let allUser = await db.User.findAll()
        resolve(allUser)
      }
    } catch (error) {
      console.log(error);
    }
  })
}
module.exports = {
  createNewUser: createNewUser,
  getAllUser: getAllUser,
  getValueEdit: getValueEdit,
  updateUser: updateUser
}
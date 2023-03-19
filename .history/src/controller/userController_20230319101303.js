import UserService from "../services/UserService";
let UserLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let userData = await UserService.handleUserLogin(email, password);
  console.log(userData);
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter"
    })
  }
  return res.status(200).json({
    errCode: userData.errCode,
    userData: userData
  })
}
module.exports = {
  UserLogin: UserLogin
}
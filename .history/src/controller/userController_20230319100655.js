import UserService from "../services/UserService";
let UserLogin = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let userData = UserService.handleUserLogin()
  console.log(useData);
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter"
    })
  }
}
module.exports = {
  UserLogin: UserLogin
}
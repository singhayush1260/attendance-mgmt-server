const User = require("../model/User");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

const register = async (req, res) => {
  const { Name, Email, Password, Designation } = req.body;
  //console.log(req.body)
  try {
    const user = await User.register(Name, Email, Password, Designation);
    console.log('inside register',user)
    const token = createToken(user._id);
    res.status(200).json({ Email, token });
  } catch (error) {
    console.log('inside register catch',error)
    res.status(200).json({user_exists:true,message: error.message });
  }
};

const login = async (req, res) => {
  const { Email, Password,Designation } = req.body;
  console.log(req.body)
  try {
    const user = await User.login(Email, Password,Designation);
    const token = createToken(user._id);
    res.status(200).json({ Email, token });
  } catch (error) {
    res.status(200).json({ incorrect_creds:true,message: error.message });
  }
};

module.exports = { login, register };

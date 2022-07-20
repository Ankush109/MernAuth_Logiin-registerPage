const User = require("../Models/usermodel");

// making the register function for the users to register to the app
const registername = async (req, res) => {
  try {
    const { name, email, password, Dateofbirth, Gender } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "user already exists" });
    }
    user = await User.create({
      // creating new user in the database
      name,
      email,
      password,
      Dateofbirth,
      Gender,
    });

    const token = await user.generatetoken(); // same as login to get the user logged in the moment they have registered
    res
      .status(201)
      .cookie("token", token, {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      })
      .json({
        success: true,
        user,
        token,
      });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password"); // will take the password form the body as its set as select false in user schema
    if (!user) {
      // checking if a user exists or not
      return res.status(400).json({
        success: false,
        message: "user does not exist",
      });
    }
    // matching password if the password matches the possword of the created user in the database
    const ismatch = await user.matchpassword(password);
    if (!ismatch) {
      // if the password does not matches the one from te database
      return res.status(400).json({
        success: false,
        message: "incorrect password",
      });
    }
    const token = await user.generatetoken(); // generating a token for user sessions
    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // the jwt token will expire in the next 90 days
        httpOnly: true,
      })
      .json({
        success: true,
        user,
        token,
      });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = { registername, loginuser };

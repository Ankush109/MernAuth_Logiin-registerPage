const express = require("express");
const { registername, loginuser } = require("../Controllers/Usercontroller");
const router = express.Router();
router.route("/register").post(registername);
router.route("/login").post(loginuser);

module.exports = router;

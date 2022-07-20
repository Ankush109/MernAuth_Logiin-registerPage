const express = require("express");
const { getprivatedata } = require("../Controllers/Private");
const { protect } = require("../middleware/auth");
const router = express.Router();

router.route("/private").get(protect, getprivatedata);
module.exports = router;

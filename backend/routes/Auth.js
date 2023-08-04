const express = require("express");
const router = express.Router();
const passport = require("passport");

const { createAccountController } = require("../controllers/reigster");
const { loginController } = require("../controllers/login");

router.route("/register").post(createAccountController);

router.route("/login").post(passport.authenticate("local"), loginController);

module.exports = router;

const express = require("express");
const router = express.Router();
const passport = require("passport");

const { createAccountController } = require("../controllers/reigster");
const { validatePassword } = require("../middleware/validatePassword");
const { loginController } = require("../controllers/login");

router.route("/register").post(validatePassword, createAccountController);

router.route("/login").post(passport.authenticate("local"), loginController);

module.exports = router;

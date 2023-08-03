const express = require("express");
const router = express.Router();

const { createAccountController } = require("../controllers/reigster");
const { loginController } = require("../controllers/login");

router.route("/register").post(createAccountController);

router.route("/login").post(loginController);

module.exports = router;

const express = require("express");
const router = express.Router();

const { createAccountController } = require("../controllers/reigster");

router.route("/register").post(createAccountController);

module.exports = router;

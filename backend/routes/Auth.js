const express = require("express");
const router = express.Router();
const passport = require("passport");

const { createAccountController } = require("../controllers/reigster");
const { loginController } = require("../controllers/login");

/*Code for test */

// router.get("/", (req, res, next) => {
//   res.send('<h1>Home</h1><p>Please <a href="./register">register</a></p>');
// });

// router.get("/login", (req, res, next) => {
//   const form =
//     '<h1>Login Page</h1><form method="POST" action="/api/account/login">\
//   Enter Username:<br><input type="text" name="email">\
//   <br>Enter Password:<br><input type="password" name="pass">\
//   <br><br><input type="submit" value="Submit"></form>';

//   res.send(form);
// });

// router.get("/register", (req, res, next) => {
//   const form =
//     '<h1>Register Page</h1><form method="post" action="/api/account/login">\
//                       Enter Username:<br><input type="text" name="email">\
//                       <br>Enter Password:<br><input type="password" name="pass">\
//                       <br><br><input type="submit" value="Submit"></form>';
//   res.send(form);
// });

/* */

router.route("/register").post(createAccountController);

router.route("/login").post(passport.authenticate("local"), loginController);

// router.route("/login").post((req, res) => {
//   console.log(req.body);
//   return res.status(200).json({ status: "success" });
// });

module.exports = router;

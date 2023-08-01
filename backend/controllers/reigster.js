const createAccount = require("../services/userService");

function createAccountController(req, res) {
  const { email, pass, firstName, lastName, phone } = req.body;
  const userInput = [email, pass, `${firstName} ${lastName}`, phone];

  createAccount(userInput, (error, results) => {
    if (error) {
      return res.status(200).json({
        status: "request ok, registration denied",
        msg: error.sqlMessage,
      });
    }
    return res
      .status(200)
      .json({ status: "success", msg: `${email} registered succesfully` });
  });
}

module.exports = { createAccountController };

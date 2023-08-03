const createAccount = require("../services/userService");
const { hashPassword } = require("../services/passwordUtils");

// const users = [];

async function createAccountController(req, res) {
  try {
    const { email, pass, firstName, lastName, phone } = req.body;
    const hashedPass = await hashPassword(pass);
    const userInput = [email, `${firstName} ${lastName}`, phone, hashedPass];

    const results = await createAccount(userInput);

    if (!results.success) {
      return res
        .status(500)
        .json({ status: "failed", msg: results.error.message });
    }

    return res
      .status(200)
      .json({
        status: "success",
        msg: `User ${email} registered successfully`,
      });
    // users.push({
    //   email: email,
    //   password: hashedPass,
    // });
    // return res.status(200).json({ status: "success", data: users });
    // Leave for testing
  } catch (err) {
    return res.status(500).json({ status: "error", msg: err.message });
  }
}

module.exports = { createAccountController };

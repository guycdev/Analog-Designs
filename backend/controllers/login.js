const { getUserByEmail } = require("../models/user");
const { verifyPassword } = require("../services/passwordUtils");

async function loginController(req, res) {
  try {
    const { email, pass } = req.body;
    const user = await getUserByEmail(email);

    if (user) {
      const isPasswordVerified = verifyPassword(pass, user.pass);
      return isPasswordVerified
        ? res.status(200).json({ status: "success" })
        : res
            .status(401)
            .json({ status: "failed", msg: "Password is incorrect" });
    }
    return res
      .status(400)
      .json({ status: "failed", msg: `User ${email} does not exist` });
  } catch (err) {
    return res.status(500).json({ status: "error", msg: err.message });
  }
}

module.exports = { loginController };

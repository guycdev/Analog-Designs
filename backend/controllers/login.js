async function loginController(req, res) {
  console.log("hi");
  try {
    if (req.user) {
      console.log(req.user);
      console.log(req.sessionID);
      return res.status(200).json({ status: "success", user: req.user });
    }
    return res
      .status(400)
      .json({ status: "failed", msg: `User does not exist` });
  } catch (err) {
    return res.status(500).json({ status: "error", msg: err.message });
  }
}

module.exports = { loginController };

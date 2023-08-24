function sendError(res, message) {
  return res.status(400).json({ status: "error", message });
}

function validatePassword(req, res, next) {
  const { confPass, pass } = req.body;

  if (pass.length < 8) {
    return sendError(res, "Password is too short");
  }

  if (pass.length > 25) {
    return sendError(res, "Password is too long");
  }

  if (!/\d/.test(pass)) {
    return sendError(res, "Password does not contain any numbers");
  }

  if (!/[A-Z]/.test(pass)) {
    return sendError(res, "Password does not contain a capitalcase letter");
  }

  if (!/[a-z]/.test(pass)) {
    return sendError(res, "Password does not contain a lowercase letter");
  }

  if (pass.trim() !== pass) {
    return sendError(
      res,
      "Password must not contain leading or trailing spaces"
    );
  }

  if (confPass != pass) {
    return sendError(res, "Passwords do not match");
  }

  return next();
}

module.exports = {
  validatePassword,
};

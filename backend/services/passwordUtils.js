const bcrypt = require("bcrypt");

async function hashPassword(password) {
  try {
    const hashedPass = await bcrypt.hash(password, 10);
    return hashedPass;
  } catch (err) {
    return { status: "error", msg: err.message };
  }
}

async function verifyPassword(userProvidedPass, hashedPass) {
  return await bcrypt.compare(userProvidedPass, hashedPass);
}

module.exports = { hashPassword, verifyPassword };

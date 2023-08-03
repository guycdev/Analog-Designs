const { pool } = require("../config/db");

async function getUserByEmail(email) {
  const user = await pool.query(
    "select email,pass from users where email = ?",
    [email]
  );

  return user[0][0];
}

async function getUserById(id) {
  const user = await pool.query("select email,pass from users where id = ?", [
    id,
  ]);

  return user[0][0];
}

module.exports = { getUserByEmail, getUserById };

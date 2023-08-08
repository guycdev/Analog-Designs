const { pool } = require("../config/db");

async function getUserByEmail(email) {
  const user = await pool.query(
    "select id, email,pass from users where email = ?",
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

async function createAccount(userInput) {
  try {
    const query = `insert into users (email,full_name,phone, pass) values(?, ?, ?, ?);`;

    const results = await pool.query(query, userInput);
    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
}

module.exports = { getUserByEmail, getUserById, createAccount };

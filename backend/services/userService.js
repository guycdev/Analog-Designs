const { pool } = require("../config/db");

async function createAccount(userInput) {
  try {
    const query = `insert into users (email,full_name,phone, pass) values(?, ?, ?, ?);`;

    const results = await pool.query(query, userInput);
    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
}

async function verifyCredentials() {}

module.exports = createAccount;

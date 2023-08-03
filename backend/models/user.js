const { pool } = require("../config/db");

function getUserByEmail(email) {
  pool.query(
    "select * from users where email = ?",
    [email],
    (error, results, fields) => {
      console.log(results);
    }
  );
}

module.exports = { getUserByEmail };

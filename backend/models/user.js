const { pool } = require("../config/db");

function getUserByEmail(email, callback) {
  pool.query(
    "select email,pass form users where email = ?",
    [email],
    (error, results, fields) => {
      if (error) {
        callback(error);
        return;
      }
      const user = {
        email: results[0].email,
        pass: results[0].pass,
      };
      callback(null, user);
    }
  );
}

module.exports = { getUserByEmail };

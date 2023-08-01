const { pool } = require("../models/mysql");

function createAccount(userInput, callback) {
  const query = `insert into users (email,pass,full_name,phone) values(?, ?, ?, ?);`;

  pool.query(query, userInput, (error, results, fields) => {
    callback(error, results);
  });
}

module.exports = createAccount;

const connection = require("../models/mysql");

function createAccount(userInput, callback) {
  connection.connect();
  const query = `insert into users (email,pass,full_name,phone) values(?, ?, ?, ?);`;

  connection.query(query, userInput, (error, results, fields) => {
    connection.end();
    callback(error, results);
  });
}

module.exports = createAccount;

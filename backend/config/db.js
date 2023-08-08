const env = require("dotenv").config();
var mysql = require("mysql2");

var pool = mysql
  .createPool({
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.NAME,
  })
  .promise();

module.exports = { pool };

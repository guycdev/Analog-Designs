const env = require("dotenv").config();
var mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.NAME,
});

module.exports = { pool };

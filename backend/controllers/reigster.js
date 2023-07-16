const env = require('dotenv').config();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.NAME
});


function createAccount(req, res) {
    connection.connect();
    const { email, pass, firstName, lastName, phone } = req.body

    const userInput = [email, pass, `${firstName} ${lastName}`, phone]
    const query = `insert into users (email,pass,full_name,phone) values(?, ?, ?, ?);`

    connection.query(query, userInput, (error, results, fields) => {
        if (error) {
            return res.status(200).json({ status: "request ok, registration denied", msg: error.sqlMessage })
        }
        return res.status(200).json({ status: "success", msg: `${email} registered succesfully` });
    });
    connection.end();
}

module.exports = { createAccount }
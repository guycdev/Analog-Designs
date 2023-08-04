const express = require("express");
const passport = require("passport");
const app = express();
const auth = require("./routes/Auth");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

app.use(express.json());

const options = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.NAME,
};

const sessionStore = new MySQLStore(options);

app.use(
  session({
    secret: process.env.SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

require("./config/passportConfig");
app.use(passport.initialize());
app.use(passport.session());

app.use("/account", auth);

app.listen(3003, () => {
  console.log("Listening on port 3003...");
});

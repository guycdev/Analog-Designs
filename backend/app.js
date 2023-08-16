const express = require("express");
const passport = require("passport");
const app = express();
const auth = require("./routes/auth");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const env = require("dotenv").config();
const cors = require("cors");

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const options = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.NAME,
};

const sessionStore = new MySQLStore(options);

sessionStore
  .onReady()
  .then(() => {
    // MySQL session store ready for use.
    console.log("MySQLStore ready");
  })
  .catch((error) => {
    // Something went wrong.
    console.error(error);
  });

app.use(
  session({
    secret: process.env.SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: "none",
      secure: false, // Set to false in a local environment without HTTPS
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

require("./config/passportConfig");
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/account", auth);

app.listen(3003, () => {
  console.log("Listening on port 3003...");
});

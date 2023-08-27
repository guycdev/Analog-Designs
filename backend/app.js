const express = require("express");
const passport = require("passport");
const app = express();
const auth = require("./routes/auth");
const order = require("./routes/order");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const env = require("dotenv").config();
const cors = require("cors");

app.use(
  cors({
    origin: "http://app.local.example.com:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
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
    resave: true,
    saveUninitialized: true,

    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24,
      domain: ".local.example.com",
    },
  })
);

require("./config/passportConfig");
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/account", auth);
app.use("/api/order", order);

app.listen(3003, () => {
  console.log("Listening on port 3003...");
});

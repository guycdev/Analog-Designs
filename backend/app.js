const express = require("express");
const passport = require("passport");
const fs = require("fs");
const https = require("https");
const app = express();
const auth = require("./routes/auth");
const order = require("./routes/order");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const env = require("dotenv").config();
const cors = require("cors");

// HTTPS configuration
const privateKey = fs.readFileSync("server.key", "utf8");
const certificate = fs.readFileSync("server.cert", "utf8");
const credentials = { key: privateKey, cert: certificate };

app.use(
  cors({
    origin: "https://app.local.example.com:5173", // Update the origin
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
    console.log("MySQLStore ready");
  })
  .catch((error) => {
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
      secure: true, // Modify this to true
      sameSite: "none",
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

// Create HTTPS server
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(3003, () => {
  console.log("HTTPS Server running on port 3003");
});

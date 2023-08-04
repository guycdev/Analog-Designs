const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { getUserByEmail } = require("../models/user");
const { verifyPassword } = require("../services/passwordUtils");
const { getUserById } = require("../models/user");

async function verifyUser(email, password, done) {
  try {
    const user = await getUserByEmail(email);

    if (user) {
      const isPasswordVerified = await verifyPassword(password, user.pass);
      if (isPasswordVerified) {
        return done(null, user);
      }
      return done(null, false, { message: "Password is incorrect" });
    }
    return done(null, false, { message: `User ${email} does not exist` });
  } catch (err) {
    return done(err);
  }
}

const strategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "pass",
  },
  verifyUser
);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    const user = await getUserById(userId);
    return done(null, user);
  } catch (err) {
    done(err);
  }
});

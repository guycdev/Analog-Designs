const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  deleteOrderController,
  testimonialController,
  profileController,
} = require("../controllers/orders");

router
  .route("/delete-order")
  .delete(passport.authenticate("local"), deleteOrderController);
router
  .route("/testimonial")
  .post(passport.authenticate("local"), testimonialController);
router.route("/orders").get(profileController);

router.route("/check-session").get((req, res) => {
  console.log("Session ID:", req.sessionID);
  console.log("Session data:", req.session);
  if (req.isAuthenticated()) {
    return res.status(200).json({
      isAuthenticated: true,
      sessionID: req.sessionID,
    });
  } else {
    return res.status(401).json({ isAuthenticated: false });
  }
});

module.exports = router;

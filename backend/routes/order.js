const express = require("express");
const router = express.Router();

const {
  deleteOrderController,
  testimonialController,
} = require("../controllers/orders");

router.route("/delete-order").delete(deleteOrderController);
router.route("/testimonial").post(testimonialController);

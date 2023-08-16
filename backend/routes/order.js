const express = require("express");
const router = express.Router();

const { deleteOrderController } = require("../controllers/orders");

router.route("/delete-order").delete(deleteOrderController);

const { getOrderByOrderId } = require("../models/order");
const { deleteOrder } = require("../services/orderUtils");

async function deleteOrderController(req, res) {
  try {
    const { email, orderId } = req.body;
    const orderInfo = await getOrderByOrderId(orderId);

    if (email == orderInfo.email) {
      const status = await deleteOrder(orderId);
      return status.status == 200
        ? res.status(200).json({ status: "sucess", meassage: `Site ` })
        : res.status(500).json({
            status: "failed",
            message: "Site deletion failed, try again",
          });
    }
  } catch (err) {
    return res.status(500).json({ status: "failed", reason: err.message });
  }
}

module.exports = {
  deleteOrderController,
};

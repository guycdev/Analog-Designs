const { getOrderByOrderId, getOrdersByCostumerId } = require("../models/order");
const { getUserByEmail, getUserById } = require("../models/user");
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
    return res.status(500).json({ status: "failed", reason: err });
  }
}

async function testimonialController(req, res) {
  try {
    console.log("hi");
  } catch {}
}

async function profileController(req, res) {
  try {
    const id = req.user.id;
    const orders = await getOrdersByCostumerId(id);
    const profile = await getUserById(id);

    return res.status(200).json({
      orders: orders,
      email: profile.email,
      fullName: profile.full_name,
      username: profile.username,
      avatar: profile.avatar,
    });
  } catch (error) {
    return res.status(500).json({ status: "failed", reason: error.message });
  }
}

module.exports = {
  deleteOrderController,
  testimonialController,
  profileController,
};

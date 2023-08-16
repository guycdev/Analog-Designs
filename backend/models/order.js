const { pool } = require("../config/db");

async function getOrdersByCostumerId(id) {
  const orders = await pool.query("select * from orders where costumerId = ?", [
    id,
  ]);
  return orders[0][0];
}

async function getOrderByOrderId(id) {
  const order = await pool.query("select * from orders where orderId =?", [id]);
  return order[0][0];
}

module.exports = {
  getOrdersByCostumerId,
  getOrderByOrderId,
};

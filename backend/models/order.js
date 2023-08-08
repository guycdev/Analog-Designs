const { pool } = require("../");

async function getOrdersById(id) {
  const orders = await pool.query("select * from orders where costumerId = ?", [
    id,
  ]);
  return orders[0][0];
}

module.exports = {
  getOrdersById,
};

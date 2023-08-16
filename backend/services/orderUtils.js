const env = require("dotenv").config();

async function deleteOrder(id) {
  //WqV6sDeLPX073vnEYL1KXslsO1hRx-G6B8lqpw3Dzso
  try {
    const response = await fetch(`https://api.netlify.com/api/v1/sites/${id}`, {
      method: "DELETE",
      headers: {
        "User-Agent": "MyWebsite (cohenguy74@gmail.com)",
        Authorization: `Bearer ${process.env.NETLIFYAPI}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Server error while deleting website");
    }
    return data;
  } catch (err) {
    return err;
  }
}

module.exports = {
  deleteOrder,
};

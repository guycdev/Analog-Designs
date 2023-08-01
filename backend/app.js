const express = require("express");
const app = express();
const auth = require("./routes/Auth");

app.use(express.json());

app.use("/account", auth);

app.listen(3003, () => {
  console.log("Listening on port 3003...");
});

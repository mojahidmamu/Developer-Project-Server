const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("developer project Server is ready...");
});

app.listen(port, () => {
  console.log(`developer projects is ready in dhaka ${port}`);
});

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Backend app is running 🚀",
    environment: process.env.NODE_ENV || "development"
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

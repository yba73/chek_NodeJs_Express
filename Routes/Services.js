const express = require("express");
const router = express.Router();
module.exports = router;

const path = require("path");
router.get("/services", (req, res) =>
  res.sendFile(path.join(__dirname, "../", "views", "Our Services.html"))
);

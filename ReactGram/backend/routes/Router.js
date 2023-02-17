const express = require("express");
const User = require("../models/User");

const router = express();

router.get("/", (req, res) => {
  res.send("API Working!");
});

// Routes
router.use("/api/users", require("./UserRoutes"));

module.exports = router;

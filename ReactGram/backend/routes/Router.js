const express = require("express");
const User = require("../models/User");

const router = express();

router.get("/", (req, res) => {
  res.send("API Working!");
});

// Routes
router.use("/api/users", require("./UserRoutes"));
router.use("/api/photos", require("./PhotoRoutes"));

module.exports = router;

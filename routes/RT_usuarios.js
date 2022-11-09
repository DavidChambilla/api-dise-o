const express = require("express");
const router = express.Router();
const controller = require("../controllers/regusuarios");

router.get("/viewusuarios", controller.view)

module.exports = router
const express = require("express");
const router = express.Router();
const controller = require("../controllers/regquejas");

router.get("/viewquejas", controller.view)

module.exports = router
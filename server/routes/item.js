const express = require("express");
const router = express.Router();

const { createNewItem } = require("../controllers/item");

router.route("/").post(createNewItem);

module.exports = router;

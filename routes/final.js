const express = require("express");
const router = express.Router();

const { getNewProducts, getNewProductsFinal } = require("../controllers/final");

router.route("/").get(getNewProducts);
router.route("/final").get(getNewProductsFinal);

module.exports = router;

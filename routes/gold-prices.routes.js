const express = require("express");
const router = express.Router();

var { getGoldsInfosV1 } = require("../controllers/gold.controller");

router.get("/golds/v1/getgoldsinfos", getGoldsInfosV1);

module.exports = router;

const express = require("express");
const router = express.Router();

var { getWeatherForecastV1 } = require("../controllers/weather.controller");

router.get("/weather/v1/getweatherinfos", getWeatherForecastV1);

module.exports = router;

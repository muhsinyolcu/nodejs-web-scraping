const axios = require("axios");
const cheerio = require("cheerio");
const { URL_FOR_WEATHER } = require("../public/urls");

module.exports.getWheatherForecastV1 = function(req, res) {
  axios(URL_FOR_WEATHER)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);

      const infos = $("tbody > tr");
      const arr = [];
      infos.each(function() {
        arr.push({
          day: $(this)
            .find(".hourly-date")
            .text(),
          time: $(this)
            .find(".dsx-date")
            .text(),
          forecast: $(this)
            .find(".hidden-cell-sm")
            .text(),
          temp: $(this)
            .find(".temp")
            .text(),
          feels: $(this)
            .find(".feels")
            .text(),
          precip: $(this)
            .find(".precip")
            .text(),
          humidity: $(this)
            .find(".humidity")
            .text(),
          wind: $(this)
            .find(".wind")
            .text()
        });
      });

      res.status(200).json({
        message: "Success",
        data: arr
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Error",
        data: err
      });
    });
};

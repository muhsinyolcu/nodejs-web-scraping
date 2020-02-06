const axios = require("axios");
const cheerio = require("cheerio");

module.exports.getGoldsInfosV1 = function(req, res) {
  const url = "https://portal-widgets-v3.foreks.com/gold";

  axios(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);

      const goldInfos = $("tbody tr");
      const arr = [];
      goldInfos.each(function() {
        arr.push({
          goldName: $(this)
            .find(".symbol")
            .text()
            .trim(),
          buy: $(this)
            .find(".last")
            .first()
            .text()
            .trim(),
          sell: $(this)
            .find(".last")
            .last()
            .text()
            .trim(),
          diff: $(this)
            .find(".percentage")
            .first()
            .text()
            .trim(),
          diffPer: $(this)
            .find(".percentage")
            .last()
            .text()
            .trim(),
          hour: $(this)
            .find(".text-right")
            .text()
            .trim()
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

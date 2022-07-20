const express = require("express");
const router = express.Router();
var request = require("request");

const courierPriceService = require("../services/courierPriceService");
const courierPriceServiceInstance = new courierPriceService();

module.exports = (app) => {
  app.use("/api/courier", router);

  router.get(
    "/:to/:from/:weight/:length/:width/:height",
    async (req, res, next) => {
      // var myHeaders = new Headers();
      // myHeaders.append("apikey", "V6M4f74h9UVB5akc");
      // myHeaders.append("Content-Type", "application/json");

      try {
        // var data = JSON.stringify({
        //   service: "PD",
        //   from_postcode: req.params.from,
        //   to_postcode: req.params.to,
        //   weight: req.params.weight,
        // });
        console.log(req.params.length + req.params.width + req.params.height);
        var options = {
          method: "GET",
          url: "https://public-api-sandbox.pgeon.delivery/public/rate",
          headers: {
            apikey: "V6M4f74h9UVB5akc",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service: "PP",
            from_postcode: req.params.from,
            to_postcode: req.params.to,
            weight: req.params.weight,
            from_country: "my",
            to_country: "my",
          }),
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
          const obj = JSON.parse(response.body);
          const price = { price: obj.data.price };
          console.log(price);
          res.send(price);
        });
      } catch (err) {
        next(err);
      }
    }
  );
};

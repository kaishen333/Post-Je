const express = require("express");
const router = express.Router();
var request = require("request");

const ProductService = require("../services/courierPriceService");
const ProductServiceInstance = new ProductService();

module.exports = (app) => {
  app.use("/api/orders", router);

  router.get("/:to/:from/:weight", async (req, res, next) => {
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
      var options = {
        method: "GET",
        url: "https://public-api-sandbox.pgeon.delivery/public/rate",
        headers: {
          apikey: "V6M4f74h9UVB5akc",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service: "DD",
          from_postcode: "11900",
          to_postcode: "11700",
          weight: "10",
          from_country: "my",
          to_country: "my"
        }),
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
      });
    } catch (err) {
      next(err);
    }
  });
};

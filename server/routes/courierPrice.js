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

        // get object of courier
        // create object with courier of length courier.obj
        // sim price and insert into obj
        // var dataObject = {
        //   1: { courier: "pgeon", price: 33, type: "pickup", prepaid: "-" },
        //   2: { courier: "pgeon", price: 33, type: "pickup", prepaid: "-" },
        //   3: { courier: "pgeon", price: 33, type: "pickup", prepaid: "-" },
        //   4: { courier: "pgeon", price: 33, type: "pickup", prepaid: "-" },
        // };

        const cour = [
          "City",
          "DHL",
          "GDEX",
          "J&T",
          "Ninja",
          "Pgeon",
          "Poslaju",
          "ParcelHub",
          "EasyParcel",
          "Mail Boxes Etc (MBE)",
          "iExpress",
          "FedEx",
        ];

        function generateRandomDouble() {
          var precision = 100; // 2 decimals
          var randomnum =
            Math.floor(
              Math.random() * (1.3 * precision - 0.8 * precision) +
                0.8 * precision
            ) /
            (0.8 * precision);
          return randomnum;
        }

        request(options, function (error, response) {
          var priceobj = {};
          if (error) throw new Error(error);
          console.log(response.body);
          const obj = JSON.parse(response.body);
          const price = { price: obj.data.price };
          console.log(price);
          for (let i = 0; i < cour.length; i++) {
            var simprice = obj.data.price * generateRandomDouble();
            console.log(simprice);
            var temp = {
              courier: cour[i],
              price: simprice,
              type: "pickup",
              prepaid: "-",
            };
            priceobj[i] = temp;
          }
          console.log(priceobj);
          res.send(priceobj);
        });
      } catch (err) {
        next(err);
      }
    }
  );
};

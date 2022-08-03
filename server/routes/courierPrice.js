const express = require("express");
const router = express.Router();
var request = require("request");

const courierPriceService = require("../services/courierPriceService");
const courierPriceServiceInstance = new courierPriceService();

const PackageInfoService = require("../services/packageInfoService");
const PackageInfoServiceInstance = new PackageInfoService();

module.exports = (app) => {
  app.use("/api/courier", router);

  router.get(
    "/:to/:from/:weight/:length/:width/:height",
    async (req, res, next) => {
      try {
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
          const obj = JSON.parse(response.body);
          const price = { price: obj.data.price };
          for (let i = 0; i < cour.length; i++) {
            var simprice = obj.data.price * generateRandomDouble();
            var temp = {
              courier: cour[i],
              price: cour[i] == "Pgeon" ? obj.data.price : simprice.toFixed(2),
              type: "pickup",
              prepaid: "-",
              prepaidLink: "-",
            };
            //https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/
            priceobj[i] = temp;
          }
          const packageparams = {
            length: req.params.length,
            width: req.params.width,
            height: req.params.height,
            weight: req.params.weight,
          };
          searchPackage(packageparams, priceobj);
        });

        function findObjectMatch(response, responsei) {
          return response.filter((obj) => {
            return (
              obj.courier === responsei.courier && obj.price === responsei.price
            );
          });
        }

        async function searchPackage(obj, courier) {
          const response = await PackageInfoServiceInstance.get(obj);
          console.log(response);
          var total = [];
          const comp = [];
          const price = [];
          // const jsonobj = JSON.stringify(response)
          for (let i = 0; i < response.length; i++) {
            if (comp.length == 0) {
              const result = findObjectMatch(response, response[i]);
              total.push(JSON.stringify(result));
              comp.push(response[i].courier);
              price.push(response[i].price);
            } else {
              if (comp.indexOf(response[i].courier) == -1) {
                const result = findObjectMatch(response, response[i]);
                total.push(JSON.stringify(result));
                comp.push(response[i].courier);
                price.push(response[i].price);
              } else {
                const loc = comp.indexOf(response[i].courier);
                if (response[i].price < price[loc]) {
                  const result = findObjectMatch(response, response[i]);
                  total.splice(loc, 1, JSON.stringify(result));
                  price.splice(loc, 1, response[i].price);
                }
              }
            }
          }
          for (let i = 0; i < Object.keys(courier).length; i++) {
            for (let y = 0; y < total.length; y++) {
              if (courier[i].courier === JSON.parse(total[y])[0].courier) {
                courier[i].prepaid = JSON.parse(total[y])[0].type;
                courier[i].prepaidLink = JSON.parse(total[y])[0].link;
              }
            }
          }
          console.log(courier);
          res.send(courier);
        }
      } catch (err) {
        next(err);
      }
    }
  );
};

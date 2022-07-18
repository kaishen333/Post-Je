const express = require("express");
const router = express.Router();

const ProductService = require("../services/courierPriceService");
const ProductServiceInstance = new ProductService();

module.exports = (app) => {
  app.use("/api/orders", router);

  router.get("/:to/:from/:weight", async (req, res, next) => {
    try {
      var data = {
        detail: {
          to: req.params.to,
          from: req.params.from,
          weight: req.params.weight,
        },
      };
      console.log(json(json(data)));

      const queryParams = req.query;
      console.log(queryParams);
      
      const response = await ProductServiceInstance.list(queryParams);

      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });
};

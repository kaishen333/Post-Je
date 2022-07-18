const express = require("express");
const router = express.Router();

const ProductService = require("../services/courierPriceService");
const ProductServiceInstance = new ProductService();

module.exports = (app) => {
  app.use("/api/orders", router);

  router.get("?", async (req, res, next) => {
    try {
        const queryParams = req.query;
        console.log(queryParams);
        const response = await ProductServiceInstance.list(queryParams);
  
        res.status(200).send(response);
      } catch(err) {
        next(err);
      }
  });
};

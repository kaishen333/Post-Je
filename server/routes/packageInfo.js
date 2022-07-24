const express = require("express");
const router = express.Router();
var request = require("request");

const PackageInfoService = require("../services/packageInfoService");
const PackageInfoServiceInstance = new PackageInfoService();

module.exports = (app) => {
  app.use("/api/package", router);
  router.get("/:length/:width/:height/:weight", async (req, res, next) => {
    try {
      const obj = req.params;

      const response = await PackageInfoServiceInstance.get(obj);

      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });
};

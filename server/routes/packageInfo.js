const express = require("express");
const router = express.Router();
var request = require("request");

const PackageInfoModel = require("../services/packageInfoService");
const PackageInfoModelInstance = new PackageInfoModel();

module.exports = (app) => {
  app.use("/api/package", router);
  router.get("/:length/:width/:height/:weight", async (req, res, next) => {
    try {
      console.log(
        req.params.length +
          req.params.width +
          req.params.height +
          req.params.weight
      );
      const obj = req.params;
      console.log(obj);

      const response = await PackageInfoModelInstance.get(obj);

      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });
};

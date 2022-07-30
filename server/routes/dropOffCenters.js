const express = require('express');
const router = express.Router();

const dropOffCentersService = require('../services/dropOffCentersService');
const dropOffCentersServiceInstance = new dropOffCentersService();

module.exports = (app) => {
    app.use("/api/googleMaps", router);
    router.get("/:sahi/:salo/:vbhi/:vblo", async (req, res, next) => {
        try {
          const obj = req.params;
    
          const response = await dropOffCentersServiceInstance.get(obj);
    
          res.status(200).send(response);
        } catch (err) {
          next(err);
        }
      });
}
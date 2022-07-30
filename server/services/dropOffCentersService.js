const createError = require("http-errors");
const DropOffCentersModel = require("../models/dropOffCenters");
const DropOffCentersModelInstance = new DropOffCentersModel();

module.exports = class dropOffCentersService {
  async get(options) {
    try {
      console.log(options);
      // Load products
      const dropoff = await DropOffCentersModelInstance.find(options);
      return dropoff;
    } catch (err) {
      throw err;
    }
  }
};

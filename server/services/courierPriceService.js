const createError = require("http-errors");
const CourierPriceModel = require("../models/courierPrice");
const CourierPriceModelInstance = new CourierPriceModel();

module.exports = class courierPriceService {
  async list(options) {
    try {
      // Load products
      const couriers = await CourierPriceModelInstance.find(options);

      return couriers;
    } catch (err) {
      throw err;
    }
  }
};

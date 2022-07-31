const createError = require("http-errors");
const CourierPriceModel = require("../models/courierPrice");
const CourierPriceModelInstance = new CourierPriceModel();

module.exports = class courierPriceService {
  async list(options) {
    try {
      // Load products
      const couriers = await CourierPriceModelInstance.find(options);
      const position = { lat: couriers.lat, lng: couriers.long };
      couriers.push(position);
      delete couriers.lat;
      delete couriers.long;
      console.log(couriers);

      return couriers;
    } catch (err) {
      throw err;
    }
  }
};

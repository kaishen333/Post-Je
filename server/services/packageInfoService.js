const createError = require("http-errors");
const PackageInfoModel = require("../models/packageInfo");
const PackageInfoModelInstance = new PackageInfoModel();

module.exports = class packageInfoService {
  async get(options) {
    try {
      // Load products
      const products = await ProductModelInstance.find(options);

      return products;
    } catch (err) {
      throw err;
    }
  }
};

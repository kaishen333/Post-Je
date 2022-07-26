const createError = require("http-errors");
const PackageInfoModel = require("../models/packageInfo");
const PackageInfoModelInstance = new PackageInfoModel();

module.exports = class packageInfoService {
  async get(options) {
    try {
      // Load products
      const packages = await PackageInfoModelInstance.find(options);
      return packages;
    } catch (err) {
      throw err;
    }
  }
};

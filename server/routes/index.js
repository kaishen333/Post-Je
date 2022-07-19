const productRouter = require('./product');

const courierPriceRouter = require('./courierPrice');
const dropOffCentersRouter = require('./dropOffCenters');
const packageInfotRouter = require('./packageInfo');

module.exports = (app) => {
  productRouter(app);

  courierPriceRouter(app);
  dropOffCentersRouter(app);
  packageInfotRouter(app);
}
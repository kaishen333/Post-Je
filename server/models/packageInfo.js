const db = require("../db");

module.exports = class PackageInfoModel {
  async find(options) {
    try {
      const statement = `SELECT package.type, courier.name AS courier, 
      CONCAT(package.length, 'x', package.width, 'x', COALESCE(package.height,0),'mm') AS dimension,
      package.price, package.weight, package.link
      FROM package
      INNER JOIN courier ON package.courierid = courier.id
      WHERE weight > $1  
      AND length > $2
      AND width > $3`;

      var we = options.weight * 1;
      var l = options.length * 10;
      var w = options.width * 10;
      var h = options.height * 10;
      const values = [we, l, w];

      const result = await db.query(statement, values);
      console.log(result.rows);
      if (result.rows?.length) {
        return result.rows;
      }

      return [];
    } catch (err) {
      throw err;
    }
  }
};

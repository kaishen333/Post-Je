const db = require("../db");

module.exports = class PackageInfoModel {
  async find(options) {
    try {
      const statement = `SELECT *
                             FROM package
                             WHERE weight < $1
                             AND length < $2
                             AND width < $3
                             `;
      const values = [
        options.weight,
        options.length,
        options.width,
        options.height,
      ];

      const result = await db.query(statement, values);

      if (result.rows?.length) {
        return result.rows;
      }

      return [];
    } catch (err) {
      throw err;
    }
  }
};

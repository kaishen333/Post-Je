const db = require("../db");

module.exports = class DropOffCentersModel {
  async find(options) {
    try {
      const statement = `select courier.name, dropoff.* from dropoff
      INNER JOIN courier ON dropoff.courierid = courier.id
      where long between $1 and $2
      and lat between $3 and $4;`;

      const values = [options.salo, options.sahi, options.vblo, options.vbhi];
      console.log(values);

      const result = await db.query(statement, values);
      if (result.rows?.length) {
        console.log(result.rows);
        return result.rows;
      }

      return [];
    } catch (err) {
      throw err;
    }
  }
};

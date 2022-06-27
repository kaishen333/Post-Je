const { Client } = require('pg');
const { DB } = require('./config');

(async () => {

  const stateTableStmt = `
    CREATE TABLE IF NOT EXISTS state (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      name            VARCHAR(50)     NOT NULL,
    );
  `
  const postcodeTableStmt = `
    CREATE TABLE IF NOT EXISTS postcode (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      stateId         INT             NOT NULL,
      postcode        INT             NOT NULL,
      FOREIGN KEY (stateId) REFERENCES state(id),
    );
  `
  const dropOffTableStmt = `
    CREATE TABLE IF NOT EXISTS dropOff (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      postcodeId      INT             NOT NULL,
      courierId       INT             NOT NULL,
      lat             INT             NOT NULL,
      long            INT             NOT NULL,
      FOREIGN KEY (postcodeId) REFERENCES postcode(id),
      FOREIGN KEY (courierId) REFERENCES courier(id)
    );
  `
  const courierTableStmt = `
    CREATE TABLE IF NOT EXISTS courier (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      name            VARCHAR(50)     NOT NULL,
    );
  `
  const packageTableStmt = `
    CREATE TABLE IF NOT EXISTS package (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      courierId       INT             NOT NULL,
      length          INT             NOT NULL,
      width           INT             NOT NULL,
      height          INT             NOT NULL,
      price           INT             NOT NULL,
      weight          INT             NOT NULL,
      link            VARCHAR(100)    NOT NULL,
      FOREIGN KEY (courierId) REFERENCES courier(id),
    );
  `

  try {
    const db = new Client({
      user: DB.PGUSER,
      host: DB.PGHOST,
      database: DB.PGDATABASE,
      password: DB.PGPASSWORD,
      port: DB.PGPORT
    });

    await db.connect();

    // Create tables on database
    await db.query(stateTableStmt);
    await db.query(postcodeTableStmt);
    await db.query(dropOffTableStmt);
    await db.query(courierTableStmt);
    await db.query(packageTableStmt);

    await db.end();

  } catch(err) {
    console.log("ERROR CREATING ONE OR MORE TABLES: ", err);
  }

})();
const { Client } = require("pg");
const { DB } = require("./config");

(async () => {
  const locationTableStmt = `
    CREATE TABLE IF NOT EXISTS location (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      name            VARCHAR(50)     NOT NULL,
      postcode        INT             NOT NULL,
    );
  `;
  const dropOffTableStmt = `
    CREATE TABLE IF NOT EXISTS dropOff (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      locationId      INT             NOT NULL,
      courierId       INT             NOT NULL,
      lat             DOUBLE          NOT NULL,
      long            DOUBLE          NOT NULL,
      name            VARCHAR(100)    NOT NULL,
      FOREIGN KEY (locationId) REFERENCES location(id),
      FOREIGN KEY (courierId) REFERENCES courier(id)
    );
  `;
  const courierTableStmt = `
    CREATE TABLE IF NOT EXISTS courier (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      name            VARCHAR(50)     NOT NULL,
    );
  `;
  const packageTableStmt = `
    CREATE TABLE IF NOT EXISTS package (
      id              INT             PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      courierId       INT             NOT NULL,
      type            VARCHAR(100)    NOT NULL,
      length          INT             NOT NULL,
      width           INT             NOT NULL,
      height          INT             ,
      price           DOUBLE          NOT NULL,
      weight          DOUBLE          NOT NULL,
      link            VARCHAR(500)    NOT NULL,
      FOREIGN KEY (courierId) REFERENCES courier(id),
    );
  `;

  try {
    const db = new Client({
      user: DB.PGUSER,
      host: DB.PGHOST,
      database: DB.PGDATABASE,
      password: DB.PGPASSWORD,
      port: DB.PGPORT,
    });

    await db.connect();

    // Create tables on database
    await db.query(locationTableStmt);
    await db.query(dropOffTableStmt);
    await db.query(courierTableStmt);
    await db.query(packageTableStmt);

    await db.end();
  } catch (err) {
    console.log("ERROR CREATING ONE OR MORE TABLES: ", err);
  }
})();

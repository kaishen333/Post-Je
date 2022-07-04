CREATE DATABASE post_je;

CREATE TABLE IF NOT EXISTS location (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    postcode INT NOT NULL
);

CREATE TABLE IF NOT EXISTS courier (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS dropOff (
    id SERIAL PRIMARY KEY,
    locationId INT NOT NULL,
    courierId INT NOT NULL,
    lat FLOAT NOT NULL,
    long FLOAT NOT NULL,
    FOREIGN KEY (locationId) REFERENCES location(id),
    FOREIGN KEY (courierId) REFERENCES courier(id)
);

CREATE TABLE IF NOT EXISTS package (
    id SERIAL PRIMARY KEY,
    courierId INT NOT NULL,
    type VARCHAR(100),
    length INT NOT NULL,
    width INT NOT NULL,
    height INT,
    price FLOAT NOT NULL,
    weight FLOAT NOT NULL,
    link VARCHAR(100) NOT NULL,
    FOREIGN KEY (courierId) REFERENCES courier(id)
);
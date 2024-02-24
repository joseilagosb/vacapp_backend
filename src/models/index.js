"use strict";

import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import credentials from "../database/config.js";

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const envCredentials = credentials[env];
const db = {};

let sequelize;
if (envCredentials.use_env_variable) {
  sequelize = new Sequelize(process.env[envCredentials.use_env_variable], envCredentials);
} else {
  sequelize = new Sequelize(envCredentials.database, envCredentials.username, envCredentials.password, envCredentials);
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file)).default(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

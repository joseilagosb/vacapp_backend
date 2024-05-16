"use strict";

import fs from "fs";
import path from "path";
import { Sequelize, Model } from "sequelize";
import credentials from "../database/config";

import dotenv from "dotenv";
dotenv.config();

const basename = path.basename(__filename);
const db: any = {};

let sequelize = new Sequelize(credentials[process.env.NODE_ENV]);

const area = require("./area/Area.init").default(sequelize);
const coordinate = require("./coordinate/Coordinate.init").default(sequelize);
db["Area"] = area;
db["Coordinate"] = coordinate;

console.log(db);

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file)).default(sequelize, DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

export default db;

import fs from "fs";
import path from "path";
const basename = path.basename(__filename);

import { Area, Coordinate } from "./init";

import dotenv from "dotenv";
import { AreaCoordinate } from "./AreaCoordinate";
dotenv.config();

const db: any = {};
db["Area"] = Area;
db["AreaCoordinate"] = AreaCoordinate;
db["Coordinate"] = Coordinate;

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file)).default(sequelize, DataTypes);
//     db[model.name] = model;
//   });

export default db;

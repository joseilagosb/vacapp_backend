import fs from "fs";
import path from "path";
const basename = path.basename(__filename);

import {
  Area,
  Coordinate,
  AreaCoordinate,
  PlaceType,
  Service,
  Indicator,
  CurrentCrowd,
  CurrentQueue,
  Place,
  PlaceCoordinate,
  PlaceService,
  PlaceIndicator,
  PlaceWorkingDay,
} from "./init";

import dotenv from "dotenv";
dotenv.config();

const db: any = {};
db["Area"] = Area;
db["AreaCoordinate"] = AreaCoordinate;
db["Coordinate"] = Coordinate;
db["PlaceType"] = PlaceType;
db["Service"] = Service;
db["Indicator"] = Indicator;
db["CurrentCrowd"] = CurrentCrowd;
db["CurrentQueue"] = CurrentQueue;
db["Place"] = Place;
db["PlaceCoordinate"] = PlaceCoordinate;
db["PlaceService"] = PlaceService;
db["PlaceIndicator"] = PlaceIndicator;
db["PlaceWorkingDay"] = PlaceWorkingDay;

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file)).default(sequelize, DataTypes);
//     db[model.name] = model;
//   });

export default db;

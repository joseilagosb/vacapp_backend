import fs from "fs";
import path from "path";
const basename = path.basename(__filename);

import dotenv from "dotenv";
dotenv.config();

const db: any = {};
fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts";
  })
  .forEach((file) => {
    const modelName = file.replace(".ts", "");
    const model = require(path.join(__dirname, file))[modelName];
    db[modelName] = model;
  });

export default db;

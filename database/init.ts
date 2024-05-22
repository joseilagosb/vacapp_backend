import path from "path";
import { Sequelize } from "sequelize-typescript";

import credentials from "./config";

import dotenv from "dotenv";
dotenv.config();

let sequelize = new Sequelize({
  ...credentials,
  models: [path.join(__dirname, "..", "models")],
});

export default sequelize;

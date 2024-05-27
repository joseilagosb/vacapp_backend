import path from "path";
import { Sequelize } from "sequelize-typescript";

// Ver config.ts. El archivo de configuración tiene que importarse en formato CommonJS
const config = require("./config");

import dotenv from "dotenv";
dotenv.config();

let sequelize = new Sequelize({
  ...config[process.env.NODE_ENV],
  models: [path.join(__dirname, "models")],
});

export default sequelize;

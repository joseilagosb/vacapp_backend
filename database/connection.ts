import { Sequelize } from "sequelize";
import credentials from "./config";

import dotenv from "dotenv";
dotenv.config();

let sequelize = new Sequelize(credentials[process.env.NODE_ENV]);

export default sequelize;

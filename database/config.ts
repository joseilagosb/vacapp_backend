import dotenv from "dotenv";
dotenv.config();

import { DatabaseConfig, DatabaseOptions } from "../ts/types/database.types";

const options: DatabaseOptions = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT as never,
  dialect: "postgres",
};

const config: DatabaseConfig = {
  development: { ...options },
  test: { ...options },
  production: { ...options },
};

// Se debe exportar de esta manera para realizar las migraciones y seeds sin problemas
// Sequelize solamente funciona con CommonJS, así que exportarlo con export default o export va a tirar error
module.exports = config;

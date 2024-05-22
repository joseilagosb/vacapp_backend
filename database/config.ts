import dotenv from "dotenv";
dotenv.config();

import { DatabaseOptions } from "../ts/types/database.types";

const options: DatabaseOptions = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  port: 5432,
  dialect: "postgres",
};

export default options;

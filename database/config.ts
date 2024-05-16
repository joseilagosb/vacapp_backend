import dotenv from "dotenv";
import { DatabaseCredentialsByEnv } from "../ts/types/database.types";
dotenv.config();

const credentials: DatabaseCredentialsByEnv = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: 5432,
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: undefined,
    database: "database_test",
    host: "127.0.0.1",
    port: 5432,
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: undefined,
    database: "database_production",
    host: "127.0.0.1",
    port: 5432,
    dialect: "mysql",
  },
};

export default credentials;

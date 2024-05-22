import { Dialect, Options } from "sequelize";

export type DatabaseOptions = {
  database: string;
  username: string;
  password: string | undefined;
  host: string | undefined;
  dialect: Dialect | undefined;
  port: number | undefined;
} & Options;

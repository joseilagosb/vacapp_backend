import { Dialect, Options } from "sequelize";
import { Environment } from "../enums/utils.enums";

export type DatabaseCredentials = {
  database: string;
  username: string;
  password: string | undefined;
  host: string | undefined;
  dialect: Dialect | undefined;
  port: number | undefined;
} & Options;

export type DatabaseCredentialsByEnv = {
  [key in Environment]: DatabaseCredentials;
};

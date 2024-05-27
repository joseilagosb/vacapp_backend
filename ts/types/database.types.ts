import { Options, QueryInterface } from "sequelize";
import { Environment } from "../enums/utils.enums";

export type DatabaseOptions = {
  database: string;
  username: string;
  password: string | undefined;
  host: string | undefined;
  port: string | undefined;
} & Options;
export type DatabaseConfig = Record<Environment, DatabaseOptions>;

export type Migration = {
  up(queryInterface: QueryInterface, Sequelize: typeof import("sequelize")): Promise<void>;
  down(queryInterface: QueryInterface, Sequelize: typeof import("sequelize")): Promise<void>;
};
export type Seed = Migration;

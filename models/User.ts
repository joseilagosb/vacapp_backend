import { InferAttributes, InferCreationAttributes, Model, InitOptions, DataTypes } from "sequelize";

import sequelize from "../database/connection";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare username: string;
  declare password: string;
}

export const userAttributes = { username: DataTypes.STRING, password: DataTypes.STRING };

export const userOptions: InitOptions<User> = {
  sequelize,
  modelName: "User",
  tableName: "users",
  timestamps: false,
};

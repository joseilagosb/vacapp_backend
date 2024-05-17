import {
  Association,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
  DataTypes,
  InitOptions,
} from "sequelize";

import sequelize from "../database/connection";

import { Coordinate } from "./Coordinate";

export class Area extends Model<InferAttributes<Area>, InferCreationAttributes<Area>> {
  declare id: CreationOptional<number>;
  declare area_name: string;
  declare coordinates?: NonAttribute<Array<Coordinate>>;

  declare static associations: {
    coordinates: Association<Area, Coordinate>;
  };
}

export const areaAttributes = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
  },
  area_name: DataTypes.STRING,
};

export const areaOptions: InitOptions<Area> = {
  sequelize,
  modelName: "Area",
  tableName: "areas",
  timestamps: false,
};

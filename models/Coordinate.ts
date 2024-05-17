import { DataTypes, InferAttributes, InferCreationAttributes, InitOptions, Model } from "sequelize";
import sequelize from "../database/connection";

export class Coordinate extends Model<
  InferAttributes<Coordinate>,
  InferCreationAttributes<Coordinate>
> {
  declare latitude: Number;
  declare longitude: Number;
}

export const coordinateAttributes = {
  latitude: DataTypes.DECIMAL,
  longitude: DataTypes.DECIMAL,
};

export const coordinateOptions: InitOptions = {
  sequelize,
  modelName: "Coordinate",
  tableName: "coordinates",
  timestamps: false,
};

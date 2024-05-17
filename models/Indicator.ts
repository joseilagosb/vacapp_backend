import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  InitOptions,
  Model,
} from "sequelize";
import sequelize from "../database/connection";

export class Indicator extends Model<
  InferAttributes<Indicator>,
  InferCreationAttributes<Indicator>
> {
  declare id: CreationOptional<number>;
  declare indicator_name: string;
  declare indicator_type: number;
  declare indicator_description: number;
}

export const indicatorAttributes = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
  },
  indicator_name: DataTypes.STRING,
  indicator_type: DataTypes.INTEGER,
  indicator_description: DataTypes.STRING,
};

export const indicatorOptions: InitOptions = {
  sequelize,
  modelName: "Indicator",
  tableName: "indicators",
  timestamps: false,
};

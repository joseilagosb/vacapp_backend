import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  InitOptions,
  Model,
} from "sequelize";
import sequelize from "../database/connection";

export class PlaceType extends Model<
  InferAttributes<PlaceType>,
  InferCreationAttributes<PlaceType>
> {
  declare id: CreationOptional<number>;
  declare place_type_name: string;
}

export const placeTypeAttributes = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
  },
  place_type_name: DataTypes.STRING,
};

export const placeTypeOptions: InitOptions = {
  sequelize,
  modelName: "PlaceType",
  tableName: "place_types",
  timestamps: false,
};

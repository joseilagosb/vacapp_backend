import { ForeignKey, InferAttributes, InferCreationAttributes, Model, DataTypes } from "sequelize";

import sequelize from "../database/connection";

export class PlaceCoordinate extends Model<
  InferAttributes<PlaceCoordinate>,
  InferCreationAttributes<PlaceCoordinate>
> {
  declare place_id: ForeignKey<number>;
  declare coordinate_id: ForeignKey<number>;
}

export const placeCoordinateAttributes = {
  place_id: DataTypes.INTEGER,
  coordinate_id: DataTypes.INTEGER,
};

export const placeCoordinateOptions = {
  sequelize,
  modelName: "PlaceCoordinate",
  tableName: "place_coordinate",
  timestamps: false,
};

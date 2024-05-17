import { ForeignKey, InferAttributes, InferCreationAttributes, Model, DataTypes } from "sequelize";

import sequelize from "../database/connection";

export class PlaceService extends Model<
  InferAttributes<PlaceService>,
  InferCreationAttributes<PlaceService>
> {
  declare place_id: ForeignKey<number>;
  declare service_id: ForeignKey<number>;
}

export const placeServiceAttributes = {
  place_id: DataTypes.INTEGER,
  service_id: DataTypes.INTEGER,
};

export const placeServiceOptions = {
  sequelize,
  modelName: "PlaceService",
  tableName: "place_service",
  timestamps: false,
};

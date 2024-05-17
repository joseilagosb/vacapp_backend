import { ForeignKey, InferAttributes, InferCreationAttributes, Model, DataTypes } from "sequelize";

import sequelize from "../database/connection";

export class AreaCoordinate extends Model<
  InferAttributes<AreaCoordinate>,
  InferCreationAttributes<AreaCoordinate>
> {
  declare area_id: ForeignKey<number>;
  declare coordinate_id: ForeignKey<number>;
}

export const areaCoordinateAttributes = {
  area_id: DataTypes.INTEGER,
  coordinate_id: DataTypes.INTEGER,
};

export const areaCoordinateOptions = {
  sequelize,
  modelName: "AreaCoordinate",
  tableName: "area_coordinate",
  timestamps: false,
};

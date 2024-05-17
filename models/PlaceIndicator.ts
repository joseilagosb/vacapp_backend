import { ForeignKey, InferAttributes, InferCreationAttributes, Model, DataTypes } from "sequelize";

import sequelize from "../database/connection";

export class PlaceIndicator extends Model<
  InferAttributes<PlaceIndicator>,
  InferCreationAttributes<PlaceIndicator>
> {
  declare place_id: ForeignKey<number>;
  declare indicator_id: ForeignKey<number>;
  declare indicator_value: number;
  declare opinion_no: number;
}

export const placeIndicatorAttributes = {
  place_id: DataTypes.INTEGER,
  indicator_id: DataTypes.INTEGER,
  indicator_value: DataTypes.FLOAT,
  opinion_no: DataTypes.INTEGER,
};

export const placeIndicatorOptions = {
  sequelize,
  modelName: "PlaceIndicator",
  tableName: "place_indicator",
  timestamps: false,
};

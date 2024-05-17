import {
  InferAttributes,
  InferCreationAttributes,
  Model,
  DataTypes,
  CreationOptional,
  ForeignKey,
} from "sequelize";

import sequelize from "../database/connection";

export class PlaceWorkingDay extends Model<
  InferAttributes<PlaceWorkingDay>,
  InferCreationAttributes<PlaceWorkingDay>
> {
  declare id: CreationOptional<number>;
  declare place_id: ForeignKey<number>;
  declare day_of_week: number;
  declare opening_time: Date;
  declare closing_time: Date;
}

export const placeWorkingDayAttributes = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
  },
  place_id: DataTypes.INTEGER,
  day_of_week: DataTypes.INTEGER,
  opening_time: DataTypes.TIME,
  closing_time: DataTypes.TIME,
};

export const placeWorkingDayOptions = {
  sequelize,
  modelName: "PlaceWorkingDay",
  tableName: "place_working_days",
  timestamps: false,
};

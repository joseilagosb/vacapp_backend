import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  InitOptions,
  Model,
} from "sequelize";
import sequelize from "../database/connection";

export class CurrentCrowd extends Model<
  InferAttributes<CurrentCrowd>,
  InferCreationAttributes<CurrentCrowd>
> {
  declare id: CreationOptional<number>;
  declare place_id: ForeignKey<number>;
  declare people_no: number;
  declare crowd_day_of_week: number;
  declare crowd_hour: number;
}

export const currentCrowdAttributes = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
  },
  place_id: DataTypes.INTEGER,
  people_no: DataTypes.INTEGER,
  crowd_day_of_week: DataTypes.INTEGER,
  crowd_hour: DataTypes.INTEGER,
};

export const currentCrowdOptions: InitOptions = {
  sequelize,
  modelName: "CurrentCrowd",
  tableName: "current_crowds",
  timestamps: false,
};

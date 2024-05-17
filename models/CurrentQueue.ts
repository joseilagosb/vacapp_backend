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

export class CurrentQueue extends Model<
  InferAttributes<CurrentQueue>,
  InferCreationAttributes<CurrentQueue>
> {
  declare id: CreationOptional<number>;
  declare place_id: ForeignKey<number>;
  declare people_no: number;
  declare queue_day_of_week: number;
  declare queue_hour: number;
}

export const currentQueueAttributes = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
  },
  place_id: DataTypes.INTEGER,
  people_no: DataTypes.INTEGER,
  queue_day_of_week: DataTypes.INTEGER,
  queue_hour: DataTypes.INTEGER,
};

export const currentQueueOptions: InitOptions = {
  sequelize,
  modelName: "CurrentQueue",
  tableName: "current_queues",
  timestamps: false,
};

import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  InitOptions,
  Model,
} from "sequelize";
import sequelize from "../database/connection";

export class Service extends Model<InferAttributes<Service>, InferCreationAttributes<Service>> {
  declare id: CreationOptional<number>;
  declare service_name: string;
  declare service_description: string;
}

export const serviceAttributes = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
  },
  service_name: DataTypes.STRING,
  service_description: DataTypes.STRING,
};

export const serviceOptions: InitOptions = {
  sequelize,
  modelName: "Service",
  tableName: "services",
  timestamps: false,
};

//     static associate(models) {
//       models.Service.belongsToMany(models.Place, {
//         as: "places",
//         through: models.PlaceService,
//         foreignKey: "service_id",
//       });
//     }

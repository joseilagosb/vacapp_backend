import { DataTypes, Sequelize } from "sequelize";
import Coordinate from "./Coordinate.model";

export default (sequelize: Sequelize) => {
  Coordinate.init(
    {
      latitude: DataTypes.DECIMAL,
      longitude: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Coordinate",
      tableName: "coordinates",
      timestamps: false,
    }
  );
};

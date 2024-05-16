import { DataTypes, Sequelize } from "sequelize";
import AreaCoordinate from "./AreaCoordinate.model";

export default (sequelize: Sequelize) => {
  AreaCoordinate.init(
    {
      area_id: DataTypes.INTEGER,
      coordinate_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AreaCoordinate",
      tableName: "area_coordinate",
      timestamps: false,
    }
  );
};

import { DataTypes, Sequelize } from "sequelize";
import Area from "./Area.model";

export default (sequelize: Sequelize) => {
  return Area.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
      },
      area_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Area",
      tableName: "areas",
      timestamps: false,
    }
  );
};

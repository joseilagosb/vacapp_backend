import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class AreaCoordinate extends Model {
    static associate(models) {
      // define association here
    }
  }
  AreaCoordinate.init(
    {
      area_id: DataTypes.INTEGER,
      coordinate_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AreaCoordinate",
      tableName: "area_coordinate",
      timestamps: false
    }
  );
  return AreaCoordinate;
};

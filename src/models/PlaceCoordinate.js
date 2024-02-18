import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class PlaceCoordinate extends Model {
    static associate(models) {
      // define association here
    }
  }
  PlaceCoordinate.init(
    {
      place_id: DataTypes.INTEGER,
      coordinate_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PlaceCoordinate",
      tableName: "place_coordinate",
      timestamps: false,
    }
  );
  return PlaceCoordinate;
};

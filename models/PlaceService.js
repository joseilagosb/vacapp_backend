import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class PlaceService extends Model {
    static associate(models) {
      // define association here
    }
  }
  PlaceService.init(
    {
      place_id: DataTypes.INTEGER,
      service_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PlaceService",
      tableName: "place_service",
      timestamps: false,
    }
  );
  return PlaceService;
};

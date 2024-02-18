import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Coordinate extends Model {
    static associate(models) {
      models.Coordinate.belongsToMany(models.Place, {
        as: 'places',
        through: models.PlaceCoordinate,
        foreignKey: "coordinate_id"
      });
      models.Coordinate.belongsToMany(models.Area, {
        as: 'areas',
        through: models.AreaCoordinate,
        foreignKey: "coordinate_id"
      });
    }
  }
  Coordinate.init(
    {
      latitude: DataTypes.DECIMAL,
      longitude: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Coordinate",
      tableName: "coordinates",
      timestamps: false
    }
  );
  return Coordinate;
};

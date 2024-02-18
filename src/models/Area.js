import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Area extends Model {
    static associate(models) {
      models.Area.belongsToMany(models.Coordinate, {
        as: 'coordinates',
        through: models.AreaCoordinate,
        foreignKey: "area_id"
      });
    }
  }
  Area.init(
    {
      area_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Area",
      tableName: "areas",
      timestamps: false
    }
  );
  return Area;
};

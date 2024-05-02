import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class PlaceType extends Model {
    static associate(models) {
      models.PlaceType.hasMany(models.Place, {
        as: "places",
        foreignKey: "place_type",
      });
    }
  }
  PlaceType.init(
    {
      place_type_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PlaceType",
      tableName: "place_types",
      timestamps: false,
    }
  );
  return PlaceType;
};

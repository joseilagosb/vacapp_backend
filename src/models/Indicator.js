import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Indicator extends Model {
    static associate(models) {
      models.Indicator.belongsToMany(models.Place, {
        as: "places",
        through: models.PlaceIndicator,
        foreignKey: "indicator_id",
      });
    }
  }
  Indicator.init(
    {
      indicator_name: DataTypes.STRING,
      indicator_type: DataTypes.INTEGER,
      indicator_description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Indicator",
      tableName: "indicators",
      timestamps: false,
    }
  );
  return Indicator;
};

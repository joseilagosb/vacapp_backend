import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class PlaceIndicator extends Model {
    static associate(models) {
      // define association here
    }
  }
  PlaceIndicator.init(
    {
      place_id: DataTypes.INTEGER,
      indicator_id: DataTypes.INTEGER,
      indicator_value: DataTypes.FLOAT,
      opinion_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PlaceIndicator",
      tableName: "place_indicator",
      timestamps: false,
    }
  );
  return PlaceIndicator;
};

import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class PlaceWorkingDay extends Model {
    static associate(models) {
      PlaceWorkingDay.belongsTo(models.Place, {
        as: "places",
        foreignKey: "place_id",
      });
    }
  }
  PlaceWorkingDay.init(
    {
      place_id: DataTypes.INTEGER,
      day_of_week: DataTypes.INTEGER,
      opening_time: DataTypes.TIME,
      closing_time: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "PlaceWorkingDay",
      tableName: "place_working_days",
      timestamps: false,
    }
  );
  return PlaceWorkingDay;
};

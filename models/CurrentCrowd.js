import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class CurrentCrowd extends Model {
    static associate(models) {
      CurrentCrowd.belongsTo(models.Place, {
        as: "places",
        foreignKey: "place_id",
      });
    }
  }
  CurrentCrowd.init(
    {
      place_id: DataTypes.INTEGER,
      people_no: DataTypes.INTEGER,
      crowd_day_of_week: DataTypes.INTEGER,
      crowd_hour: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CurrentCrowd",
      tableName: "current_crowds",
      timestamps: false,
    }
  );
  return CurrentCrowd;
};

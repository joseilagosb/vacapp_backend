import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class CurrentQueue extends Model {
    static associate(models) {
      CurrentQueue.belongsTo(models.Place, {
        as: "places",
        foreignKey: "place_id",
      });
    }
  }
  CurrentQueue.init(
    {
      place_id: DataTypes.INTEGER,
      people_no: DataTypes.INTEGER,
      queue_day_of_week: DataTypes.INTEGER,
      queue_hour: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CurrentQueue",
      tableName: "current_queues",
      timestamps: false,
    }
  );
  return CurrentQueue;
};

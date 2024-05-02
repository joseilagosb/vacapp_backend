import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      models.Service.belongsToMany(models.Place, {
        as: "places",
        through: models.PlaceService,
        foreignKey: "service_id",
      });
    }
  }
  Service.init(
    {
      service_name: DataTypes.STRING,
      service_description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Service",
      tableName: "services",
      timestamps: false,
    }
  );
  return Service;
};

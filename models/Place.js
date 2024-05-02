import { Model, Op } from "sequelize";

export default (sequelize, DataTypes) => {
  class Place extends Model {
    static associate(models) {
      models.Place.belongsToMany(models.Coordinate, {
        as: "coordinates",
        through: models.PlaceCoordinate,
        foreignKey: "place_id",
      });
      models.Place.hasOne(models.PlaceType, {
        as: "place_types",
        foreignKey: "id",
      });
      models.Place.belongsToMany(models.Service, {
        as: "services",
        through: models.PlaceService,
        foreignKey: "place_id",
      });
      models.Place.belongsToMany(models.Indicator, {
        as: "indicators",
        through: models.PlaceIndicator,
        foreignKey: "place_id",
      });
      models.Place.hasMany(models.CurrentCrowd, {
        as: "current_crowds",
        foreignKey: "place_id",
      });
      models.Place.hasMany(models.CurrentQueue, {
        as: "current_queues",
        foreignKey: "place_id",
      });
    }
  }
  Place.init(
    {
      place_name: DataTypes.STRING,
      place_short_name: DataTypes.STRING,
      place_address: DataTypes.STRING,
      surface: DataTypes.INTEGER,
      attention_surface: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Place",
      tableName: "places",
      timestamps: false,
    }
  );

  // Hace una "búsqueda invertida" del modelo asociado a Place
  // En otras palabras, hace una consulta SQL al associatedModel haciendo una carga inmediata (Eager Loading)
  // de los Place relacionados a cada fila resultante.
  Place.findByPlaceKeys = (associatedModel, placeKeys) => {
    return associatedModel.findAll({
      include: {
        model: Place,
        as: "places",
        where: { id: { [Op.in]: placeKeys } },
        attributes: ["id"],
      },
    });
  };
  return Place;
};

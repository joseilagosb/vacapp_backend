import { Model, Op } from "sequelize";

export default (sequelize, DataTypes) => {
  class Area extends Model {
    static associate(models) {
      models.Area.belongsToMany(models.Coordinate, {
        as: "coordinates",
        through: models.AreaCoordinate,
        foreignKey: "area_id",
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
      timestamps: false,
    }
  );
  Area.findByAreaKeys = (model, keys) => {
    return model.findAll({
      include: {
        model: Area,
        as: "areas",
        where: { id: { [Op.in]: keys } },
        attributes: ["id"],
      },
    });
  };
  return Area;
};

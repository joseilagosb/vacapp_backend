import {
  Association,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from "sequelize";

import Coordinate from "../coordinate/Coordinate.model";
import AreaCoordinate from "../area_coordinate/AreaCoordinate.model";

class Area extends Model<InferAttributes<Area>, InferCreationAttributes<Area>> {
  declare id: CreationOptional<number>;
  declare area_name: string;
  declare coordinates?: NonAttribute<Array<Coordinate>>;

  declare static associations: {
    coordinates: Association<Area, Coordinate>;
  };
}

Area.belongsToMany(Coordinate, {
  as: "coordinates",
  through: AreaCoordinate,
  foreignKey: "area_id",
});

export default Area;

import { Model } from "sequelize";

import Area from "../area/Area.model";
import AreaCoordinate from "../area_coordinate/AreaCoordinate.model";

class Coordinate extends Model {
  declare latitude: Number;
  declare longitude: Number;
}

Coordinate.belongsToMany(Area, {
  as: "areas",
  through: AreaCoordinate,
  foreignKey: "coordinate_id",
});

export default Coordinate;

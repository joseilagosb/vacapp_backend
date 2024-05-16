import Area from "../area/Area.model";
import AreaCoordinate from "../area_coordinate/AreaCoordinate.model";
import Coordinate from "./Coordinate.model";

// Coordinate.belongsToMany(Place, {
//   as: "places",
//   through: models.PlaceCoordinate,
//   foreignKey: "coordinate_id",
// });
Coordinate.belongsToMany(Area, {
  as: "areas",
  through: AreaCoordinate,
  foreignKey: "coordinate_id",
});

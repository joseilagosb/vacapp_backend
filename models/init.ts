import { Area, areaAttributes, areaOptions } from "./Area";
import { AreaCoordinate, areaCoordinateAttributes, areaCoordinateOptions } from "./AreaCoordinate";
import { Coordinate, coordinateAttributes, coordinateOptions } from "./Coordinate";

Area.init(areaAttributes, areaOptions);
AreaCoordinate.init(areaCoordinateAttributes, areaCoordinateOptions);
Coordinate.init(coordinateAttributes, coordinateOptions);

Area.belongsToMany(Coordinate, {
  as: "coordinates",
  through: AreaCoordinate,
  foreignKey: "area_id",
});

Coordinate.belongsToMany(Area, {
  as: "areas",
  through: AreaCoordinate,
  foreignKey: "coordinate_id",
});

export { Area, Coordinate };

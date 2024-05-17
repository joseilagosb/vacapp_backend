import { Area, areaAttributes, areaOptions } from "./Area";
import { AreaCoordinate, areaCoordinateAttributes, areaCoordinateOptions } from "./AreaCoordinate";
import { Coordinate, coordinateAttributes, coordinateOptions } from "./Coordinate";
import { CurrentCrowd, currentCrowdAttributes, currentCrowdOptions } from "./CurrentCrowd";
import { CurrentQueue, currentQueueAttributes, currentQueueOptions } from "./CurrentQueue";
import { Indicator, indicatorAttributes, indicatorOptions } from "./Indicator";
import { Place, placeAttributes, placeOptions } from "./Place";
import {
  PlaceCoordinate,
  placeCoordinateAttributes,
  placeCoordinateOptions,
} from "./PlaceCoordinate";
import { PlaceIndicator, placeIndicatorAttributes, placeIndicatorOptions } from "./PlaceIndicator";
import { PlaceService, placeServiceAttributes, placeServiceOptions } from "./PlaceService";
import { PlaceType, placeTypeAttributes, placeTypeOptions } from "./PlaceType";
import {
  PlaceWorkingDay,
  placeWorkingDayAttributes,
  placeWorkingDayOptions,
} from "./PlaceWorkingDay";
import { Service, serviceAttributes, serviceOptions } from "./Service";

Area.init(areaAttributes, areaOptions);
AreaCoordinate.init(areaCoordinateAttributes, areaCoordinateOptions);
Coordinate.init(coordinateAttributes, coordinateOptions);
PlaceType.init(placeTypeAttributes, placeTypeOptions);
Service.init(serviceAttributes, serviceOptions);
Indicator.init(indicatorAttributes, indicatorOptions);
CurrentCrowd.init(currentCrowdAttributes, currentCrowdOptions);
CurrentQueue.init(currentQueueAttributes, currentQueueOptions);
Place.init(placeAttributes, placeOptions);
PlaceCoordinate.init(placeCoordinateAttributes, placeCoordinateOptions);
PlaceService.init(placeServiceAttributes, placeServiceOptions);
PlaceIndicator.init(placeIndicatorAttributes, placeIndicatorOptions);
PlaceWorkingDay.init(placeWorkingDayAttributes, placeWorkingDayOptions);

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
Coordinate.belongsToMany(Place, {
  as: "places",
  through: PlaceCoordinate,
  foreignKey: "coordinate_id",
});

Place.hasOne(PlaceType, { as: "place_types", foreignKey: "id" });
Place.belongsToMany(Coordinate, {
  as: "coordinates",
  through: PlaceCoordinate,
  foreignKey: "place_id",
});
Place.belongsToMany(Service, {
  as: "services",
  through: PlaceService,
  foreignKey: "place_id",
});
Place.belongsToMany(Indicator, {
  as: "indicators",
  through: PlaceIndicator,
  foreignKey: "place_id",
});

Service.belongsToMany(Place, {
  as: "places",
  through: PlaceService,
  foreignKey: "service_id",
});

Indicator.belongsToMany(Place, {
  as: "places",
  through: PlaceIndicator,
  foreignKey: "indicator_id",
});

CurrentCrowd.belongsTo(Place, {
  as: "places",
  foreignKey: "place_id",
});

CurrentQueue.belongsTo(Place, {
  as: "places",
  foreignKey: "place_id",
});

PlaceWorkingDay.belongsTo(Place, {
  as: "places",
  foreignKey: "place_id",
});

export {
  Area,
  Coordinate,
  AreaCoordinate,
  PlaceType,
  Service,
  Indicator,
  CurrentCrowd,
  CurrentQueue,
  Place,
  PlaceCoordinate,
  PlaceService,
  PlaceIndicator,
  PlaceWorkingDay,
};

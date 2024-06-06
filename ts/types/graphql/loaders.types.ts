import DataLoader from "dataloader";

import PlaceType from "../../../database/models/PlaceType";
import Coordinate from "../../../database/models/Coordinate";
import Service from "../../../database/models/Service";
import Indicator from "../../../database/models/Indicator";
import PlaceWorkingDay from "../../../database/models/PlaceWorkingDay";
import CurrentCrowd from "../../../database/models/CurrentCrowd";
import CurrentQueue from "../../../database/models/CurrentQueue";

type PlaceTypeLoader = DataLoader<unknown, PlaceType, unknown>;
type CoordinatesLoader = DataLoader<unknown, Array<Coordinate>, unknown>;
type ServicesLoader = DataLoader<unknown, Array<Service>, unknown>;
type IndicatorsLoader = DataLoader<unknown, Array<Indicator>, unknown>;
type PlaceWorkingDaysLoader = DataLoader<unknown, Array<PlaceWorkingDay>, unknown>;
type CurrentCrowdsLoader = DataLoader<unknown, Array<CurrentCrowd>, unknown>;
type CurrentQueuesLoader = DataLoader<unknown, Array<CurrentQueue>, unknown>;

export type DataLoaders = {
  place: {
    placeType: PlaceTypeLoader;
    coordinates: CoordinatesLoader;
    services: ServicesLoader;
    indicators: IndicatorsLoader;
    placeWorkingDays: PlaceWorkingDaysLoader;
    currentCrowds: CurrentCrowdsLoader;
    currentQueues: CurrentQueuesLoader;
  };
} & {
  area: {
    coordinates: CoordinatesLoader;
  };
};

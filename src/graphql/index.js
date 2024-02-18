import { place } from "./Place";
import { area } from "./Area";
import { coordinate } from "./Coordinate";
import { placeType } from "./PlaceType";
import { service } from "./Service";
import { placeSnapshot } from "./PlaceSnapshot";
import { indicator } from "./Indicator";
import { currentCrowd } from "./CurrentCrowd";
import { currentQueue } from "./CurrentQueue";
import { placeWorkingDay } from "./PlaceWorkingDay";
import { crowdReport } from "./CrowdReport";

export const modules = [
  place,
  area,
  coordinate,
  placeType,
  service,
  placeSnapshot,
  indicator,
  placeWorkingDay,
  currentCrowd,
  currentQueue,
  crowdReport,
];

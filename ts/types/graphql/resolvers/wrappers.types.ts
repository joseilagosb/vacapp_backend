import Area from "../../../../database/models/Area";
import Coordinate from "../../../../database/models/Coordinate";
import CurrentCrowd from "../../../../database/models/CurrentCrowd";
import CurrentQueue from "../../../../database/models/CurrentQueue";
import Indicator from "../../../../database/models/Indicator";
import Place from "../../../../database/models/Place";
import PlaceType from "../../../../database/models/PlaceType";
import PlaceWorkingDay from "../../../../database/models/PlaceWorkingDay";
import Service from "../../../../database/models/Service";

import { AuthenticationPayload } from "../../services/authentication.types";
import { CrowdReport } from "../../services/crowd_report.types";
import { PlaceSnapshot } from "../../services/place_snapshot.types";
import { MaybeAsync } from "../../utils.types";
import { ResolversObject } from "./utils.types";

export type ResolversTypes = ResolversObject<{
  AuthenticationPayload: MaybeAsync<AuthenticationPayload>;
  Area: MaybeAsync<Area>;
  Place: MaybeAsync<Place>;
  PlaceType: MaybeAsync<PlaceType>;
  Indicator: MaybeAsync<Indicator>;
  Service: MaybeAsync<Service>;
  PlaceSnapshot: MaybeAsync<PlaceSnapshot>;
  CurrentCrowd: MaybeAsync<CurrentCrowd>;
  CurrentQueue: MaybeAsync<CurrentQueue>;
  PlaceWorkingDay: MaybeAsync<PlaceWorkingDay>;
  CrowdReport: MaybeAsync<CrowdReport>;
  Coordinate: MaybeAsync<Coordinate>;
  Mutation: MaybeAsync<{}>;
  Query: MaybeAsync<{}>;
  String: MaybeAsync<string>;
}>;

export type ResolversParentTypes = ResolversObject<{
  AuthenticationPayload: AuthenticationPayload;
  Area: Area;
  Place: Place;
  Mutation: {};
  Query: {};
}>;

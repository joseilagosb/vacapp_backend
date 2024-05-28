import CurrentCrowd from "../models/CurrentCrowd";
import CurrentQueue from "../models/CurrentQueue";
import Place from "../models/Place";

import { getPlaceSnapshotAttributes } from "./attributes/place_snapshot";

import { PlaceSnapshot } from "../../ts/types/services/place_snapshot.types";

export const getAllPlaceSnapshots = async (
  day: number,
  hour: number
): Promise<Array<PlaceSnapshot>> => {
  const places = (await Place.findAll({
    attributes: [...(getPlaceSnapshotAttributes() as [])],
    include: [
      {
        model: CurrentCrowd,
        as: "current_crowds",
        where: { crowd_day_of_week: day, crowd_hour: hour },
      },
      {
        model: CurrentQueue,
        as: "current_queues",
        where: { queue_day_of_week: day, queue_hour: hour },
      },
    ],
    raw: true,
  })) as Array<unknown>;
  return places.map((place) => ({ ...(place as PlaceSnapshot) }));
};

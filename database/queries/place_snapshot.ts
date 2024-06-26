import CurrentCrowd from "../models/CurrentCrowd";
import CurrentQueue from "../models/CurrentQueue";
import Place from "../models/Place";

import { getPlaceSnapshotAttributes } from "./attributes/place_snapshot";

import { PlaceSnapshot } from "../../ts/types/services/place_snapshot.types";

// Retorna un recuento de las estadísticas de un determinado lugar en el día y hora actuales
export const getPlaceSnapshot = async (
  placeId: number,
  day: number,
  hour: number
): Promise<PlaceSnapshot> => {
  const place = (await Place.findOne({
    attributes: getPlaceSnapshotAttributes(),
    include: [
      {
        model: CurrentCrowd,
        as: "current_crowds",
        where: { place_id: placeId, crowd_day_of_week: day, crowd_hour: hour },
      },
      {
        model: CurrentQueue,
        as: "current_queues",
        where: { place_id: placeId, queue_day_of_week: day, queue_hour: hour },
      },
    ],
    where: { id: placeId },
    raw: true,
  })) as unknown;
  if (!place) {
    throw new Error("No se encontró ningún lugar que esté asociado al identificador indicado.");
  }
  return {
    ...(place as PlaceSnapshot),
  };
};

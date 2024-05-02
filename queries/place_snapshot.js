import db from "../models";
import { getPlaceSnapshotAttributes } from "./attributes/place_snapshot";

const { Place, CurrentCrowd, CurrentQueue } = db;

// Retorna un recuento de las estadísticas de un determinado lugar en el día y hora actuales
export const getPlaceSnapshot = async (placeId, day, hour) => {
  return await Place.findOne({
    attributes: [...getPlaceSnapshotAttributes()],
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
  });
};

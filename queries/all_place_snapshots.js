import db from "../models";
import { getPlaceSnapshotAttributes } from "./attributes/place_snapshot";

const { Place, CurrentCrowd, CurrentQueue } = db;

export const getAllPlaceSnapshots = async (day, hour) => {
  return await Place.findAll({
    attributes: [...getPlaceSnapshotAttributes()],
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
  });
};

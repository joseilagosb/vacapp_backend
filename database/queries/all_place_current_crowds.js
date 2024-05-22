import db from "../models";
const { CurrentCrowd } = db;

export const getAllPlaceCurrentCrowds = async (placeId) => {
  return await CurrentCrowd.findAll({
    attributes: ["place_id", "crowd_day_of_week", "crowd_hour", "people_no"],
    where: { place_id: placeId },
    raw: true,
  });
};

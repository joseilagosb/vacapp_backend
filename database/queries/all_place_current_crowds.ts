import CurrentCrowd from "../models/CurrentCrowd";

export const getAllPlaceCurrentCrowds = async (placeId: number): Promise<Array<CurrentCrowd>> => {
  return await CurrentCrowd.findAll({
    attributes: ["place_id", "crowd_day_of_week", "crowd_hour", "people_no"],
    where: { place_id: placeId },
    raw: true,
  });
};

import db from "../models";
import { selectAllPlaceSnapshots, selectPlaceSnapshot } from "../constants/queries";

export const getPlaceSnapshot = async (place_id, day, hour) => {
  const placeSnapshot = await db.sequelize.query(selectPlaceSnapshot, {
    replacements: {
      place_id: place_id,
      day: day,
      hour: hour,
    },
    type: db.sequelize.QueryTypes.SELECT,
  });

  return placeSnapshot[0];
};

export const allPlaceSnapshots = async (day, hour) => {
  const placeSnapshots = await db.sequelize.query(selectAllPlaceSnapshots, {
    replacements: { day: day, hour: hour },
    type: db.sequelize.QueryTypes.SELECT,
  });

  return placeSnapshots;
};

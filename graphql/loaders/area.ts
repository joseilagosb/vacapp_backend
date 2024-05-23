import DataLoader from "dataloader";

import Area from "../../database/models/Area";
import Coordinate from "../../database/models/Coordinate";

import { allMatchesByKeys } from "../../database/queries/all_matches_by_keys";

export default {
  area: {
    coordinates: new DataLoader(async (keys) => {
      const coordinates = await allMatchesByKeys(Coordinate, keys, Area);
      return keys.map((key) => coordinates.filter((coordinate) => coordinate.areas[0].id === key));
    }),
  },
};

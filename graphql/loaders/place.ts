import DataLoader from "dataloader";

import PlaceType from "../../database/models/PlaceType";
import Place from "../../database/models/Place";
import Coordinate from "../../database/models/Coordinate";
import Service from "../../database/models/Service";
import PlaceWorkingDay from "../../database/models/PlaceWorkingDay";
import CurrentCrowd from "../../database/models/CurrentCrowd";
import CurrentQueue from "../../database/models/CurrentQueue";

import { allMatchesByKeys } from "../../database/queries/all_matches_by_keys";
import Indicator from "../../database/models/Indicator";
import { Op } from "sequelize";
import PlaceIndicator from "../../database/models/PlaceIndicator";

export default {
  place: {
    placeTypes: new DataLoader(async (keys) => {
      const placeTypes = await PlaceType.findAll();
      return keys.map((key) => placeTypes.filter((placeType) => placeType.id === key));
    }),
    coordinates: new DataLoader(async (keys) => {
      const coordinates = await allMatchesByKeys(Coordinate, keys, Place);
      return keys.map((key) => coordinates.filter((coordinate) => coordinate.places[0].id === key));
    }),
    services: new DataLoader(async (keys) => {
      const services = await allMatchesByKeys(Service, keys, Place);
      return keys.map((key) =>
        services.filter((service) => {
          return service.places.some((place) => place.id === key);
        })
      );
    }),
    indicators: new DataLoader(async (keys) => {
      const places = await Place.findAll({
        include: { model: Indicator },
        where: { id: { [Op.in]: keys } },
      });
      const loaders = keys.map((key) => {
        const place = places.find((place) => place.id === key);
        const placeIndicators = place.indicators.map((indicator) => ({
          ...indicator.dataValues,
          indicator_value: (indicator as any).PlaceIndicator.indicator_value,
          opinion_no: (indicator as any).PlaceIndicator.opinion_no,
        }));
        return placeIndicators;
      });
      return loaders;
    }),
    placeWorkingDays: new DataLoader(async (keys) => {
      const placeWorkingDays = await PlaceWorkingDay.findAll();
      return keys.map((key) =>
        placeWorkingDays.filter((placeWorkingDay) => placeWorkingDay.place_id === key)
      );
    }),
    currentCrowds: new DataLoader(async (keys) => {
      const currentCrowds = await CurrentCrowd.findAll();
      return keys.map((key) =>
        currentCrowds.filter((currentCrowd) => currentCrowd.place_id === key)
      );
    }),
    currentQueues: new DataLoader(async (keys) => {
      const currentQueues = await CurrentQueue.findAll();
      return keys.map((key) =>
        currentQueues.filter((currentQueue) => currentQueue.place_id === key)
      );
    }),
  },
};

import DataLoader from "dataloader";

import model from "../../models";
const { PlaceType, Coordinate, PlaceWorkingDay, Place, Service, Indicator, CurrentCrowd, CurrentQueue, Area } = model;

export default {
  placeLoader: {
    placeTypes: new DataLoader(async (keys) => {
      const placeTypes = await PlaceType.findAll();
      return keys.map((key) => placeTypes.filter((placeType) => placeType.id === key));
    }),
    coordinates: new DataLoader(async (keys) => {
      const coordinates = await Place.findByPlaceKeys(Coordinate, keys);
      return keys.map((key) => coordinates.filter((coordinate) => coordinate.places[0].id === key));
    }),
    services: new DataLoader(async (keys) => {
      const services = await Place.findByPlaceKeys(Service, keys);
      return keys.map((key) =>
        services.filter((service) => {
          return service.places.some((place) => place.id === key);
        })
      );
    }),
    indicators: new DataLoader(async (keys) => {
      const indicators = await Place.findByPlaceKeys(Indicator, keys, [
        "indicator_name",
        "indicator_description",
        "indicator_type",
        [model.sequelize.col("places.PlaceIndicator.indicator_value"), "indicator_value"],
        [model.sequelize.col("places.PlaceIndicator.opinion_no"), "opinion_no"],
      ]);
      return keys.map((key) => indicators.filter((indicator) => indicator.id === key));
    }),
    placeWorkingDays: new DataLoader(async (keys) => {
      const placeWorkingDays = await PlaceWorkingDay.findAll();
      return keys.map((key) => placeWorkingDays.filter((placeWorkingDay) => placeWorkingDay.place_id === key));
    }),
    currentCrowds: new DataLoader(async (keys) => {
      const currentCrowds = await CurrentCrowd.findAll();
      return keys.map((key) => currentCrowds.filter((currentCrowd) => currentCrowd.place_id === key));
    }),
    currentQueues: new DataLoader(async (keys) => {
      const currentQueues = await CurrentQueue.findAll();
      return keys.map((key) => currentQueues.filter((currentQueue) => currentQueue.place_id === key));
    }),
  },
  areaLoader: {
    coordinates: new DataLoader(async (keys) => {
      const coordinates = await Area.findByAreaKeys(Coordinate, keys);
      return keys.map((key) => coordinates.filter((coordinate) => coordinate.areas[0].id === key));
    }),
  },
};

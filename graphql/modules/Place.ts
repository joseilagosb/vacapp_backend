import { TypeDefs, createModule, gql } from "graphql-modules";
import { Sequelize } from "sequelize";

import Place from "../../database/models/Place";
import Coordinate from "../../database/models/Coordinate";
import PlaceType from "../../database/models/PlaceType";
import Indicator from "../../database/models/Indicator";
import Service from "../../database/models/Service";
import CurrentCrowd from "../../database/models/CurrentCrowd";
import CurrentQueue from "../../database/models/CurrentQueue";
import PlaceWorkingDay from "../../database/models/PlaceWorkingDay";

const typeDefs: TypeDefs = [
  gql`
    type Query {
      allPlaces: [Place]
      placeById(id: ID!): Place
    }
    type Place {
      id: ID!
      place_name: String
      place_short_name: String
      place_address: String
      place_type: PlaceType
      surface: Int
      attention_surface: Int
      coordinates: [Coordinate]
      services: [Service]
      indicators: [PlaceIndicator]
      current_crowds: [CurrentCrowd]
      current_queues: [CurrentQueue]
      place_working_days: [PlaceWorkingDay]
    }
  `,
];

const resolvers = {
  Query: {
    allPlaces: async () => Place.findAll(),
    placeById: async (_, args, __, ___) => Place.findByPk(args.id),
  },
  Place: {
    place_type: async (obj, _, __, ___) => PlaceType.findByPk(obj.place_type),
    coordinates: async (obj, _, __, ___) =>
      Coordinate.findAll({
        include: {
          model: Place,
          as: "places",
          where: { id: obj.id },
        },
      }),
    services: async (obj, _, __, ___) =>
      Service.findAll({
        include: {
          model: Place,
          as: "places",
          where: { id: obj.id },
        },
      }),
    indicators: async (obj, _, __, ___) =>
      Indicator.findAll({
        attributes: [
          [Sequelize.col("places.PlaceIndicator.indicator_id"), "id"],
          "indicator_name",
          "indicator_description",
          "indicator_type",
          [Sequelize.col("places.PlaceIndicator.indicator_value"), "indicator_value"],
          [Sequelize.col("places.PlaceIndicator.opinion_no"), "opinion_no"],
        ],
        include: {
          model: Place,
          as: "places",
          where: { id: obj.id },
        },
        raw: true,
      }),
    place_working_days: async (obj, _, __, ___) => PlaceWorkingDay.findAll({ where: { place_id: obj.id } }),
    current_crowds: async (obj, _, __, ___) => CurrentCrowd.findAll({ where: { place_id: obj.id } }),
    current_queues: async (obj, _, __, ___) => CurrentQueue.findAll({ where: { place_id: obj.id } }),
  },
  // Place: {
  //   place_type: async (obj, args, context, info) =>
  //     (await context.placeLoader.placeTypes.load(obj.place_type))[0],
  //   coordinates: async (obj, args, context, info) =>
  //     await context.placeLoader.coordinates.load(obj.id),
  //   services: async (obj, args, context, info) => await context.placeLoader.services.load(obj.id),
  //   indicators: async (obj, args, context, info) =>
  //     await context.placeLoader.indicators.load(obj.id),
  //   place_working_days: async (obj, args, context, info) =>
  //     await context.placeLoader.placeWorkingDays.load(obj.id),
  //   current_crowds: async (obj, args, context, info) =>
  //     await context.placeLoader.currentCrowds.load(obj.id),
  //   current_queues: async (obj, args, context, info) =>
  //     await context.placeLoader.currentQueues.load(obj.id),
  // },
};

export const place = createModule({
  id: "place",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

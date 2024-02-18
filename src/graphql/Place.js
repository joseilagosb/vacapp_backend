import { createModule, gql } from "graphql-modules";
import model from "../models";
import db from "../models";

const { Place, Coordinate, Service, PlaceType, Indicator, CurrentCrowd, CurrentQueue, PlaceWorkingDay } = model;

const typeDefs = [
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
      indicators: [Indicator]
      place_working_days: [PlaceWorkingDay]
      current_crowds: [CurrentCrowd]
      current_queues: [CurrentQueue]
    }
  `,
];

const resolvers = {
  Query: {
    allPlaces: async (obj, args, context, info) => Place.findAll(),
    placeById: async (obj, args, context, info) => Place.findByPk(args.id),
  },
  Place: {
    place_type: async (obj, args, context, info) => PlaceType.findByPk(obj.place_type),
    coordinates: async (obj, args, context, info) =>
      Coordinate.findAll({
        include: [
          {
            model: Place,
            as: "places",
            where: { id: obj.id },
          },
        ],
      }),
    services: async (obj, args, context, info) =>
      Service.findAll({
        include: [
          {
            model: Place,
            as: "places",
            where: { id: obj.id },
          },
        ],
      }),
    indicators: async (obj, args, context, info) =>
      Indicator.findAll({
        attributes: [
          "indicator_name",
          "indicator_description",
          "indicator_type",
          [db.sequelize.col("places.PlaceIndicator.indicator_value"), "indicator_value"],
          [db.sequelize.col("places.PlaceIndicator.opinion_no"), "opinion_no"],
        ],
        include: [
          {
            model: Place,
            as: "places",
            where: { id: obj.id },
          },
        ],
        raw: true,
      }),
    place_working_days: async (obj, args, context, info) =>
      PlaceWorkingDay.findAll({
        where: {
          place_id: obj.id,
        },
      }),
    current_crowds: async (obj, args, context, info) =>
      CurrentCrowd.findAll({
        where: {
          place_id: obj.id,
        },
      }),
    current_queues: async (obj, args, context, info) =>
      CurrentQueue.findAll({
        where: {
          place_id: obj.id,
        },
      }),
  },
};

export const place = createModule({
  id: "place",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

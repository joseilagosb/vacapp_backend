import { createModule, gql } from "graphql-modules";
import model from "../models/index.js";

const { Place } = model;

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
      indicators: [PlaceIndicator]
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
    place_type: async (obj, args, context, info) =>
      (await context.placeLoader.placeTypes.load(obj.place_type))[0],
    coordinates: async (obj, args, context, info) =>
      await context.placeLoader.coordinates.load(obj.id),
    services: async (obj, args, context, info) => await context.placeLoader.services.load(obj.id),
    indicators: async (obj, args, context, info) =>
      await context.placeLoader.indicators.load(obj.id),
    place_working_days: async (obj, args, context, info) =>
      await context.placeLoader.placeWorkingDays.load(obj.id),
    current_crowds: async (obj, args, context, info) =>
      await context.placeLoader.currentCrowds.load(obj.id),
    current_queues: async (obj, args, context, info) =>
      await context.placeLoader.currentQueues.load(obj.id),
  },
};

export const place = createModule({
  id: "place",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

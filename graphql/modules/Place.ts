import { TypeDefs, createModule, gql } from "graphql-modules";

import Place from "../../database/models/Place";
import { Resolvers } from "../../ts/types/graphql/resolvers.types";
import PlaceType from "../../database/models/PlaceType";

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

const resolvers: Resolvers = {
  Query: {
    allPlaces: async () => Place.findAll(),
    placeById: async (_, args, __, ___) => Place.findByPk(args.id),
  },
  Place: {
    place_type: async (obj, _, { loaders }, __) => await loaders.place.placeType.load(obj.id),
    coordinates: async (obj, _, { loaders }, __) => await loaders.place.coordinates.load(obj.id),
    services: async (obj, _, { loaders }, __) => await loaders.place.services.load(obj.id),
    indicators: async (obj, _, { loaders }, __) => await loaders.place.indicators.load(obj.id),
    place_working_days: async (obj, _, { loaders }, __) =>
      await loaders.place.placeWorkingDays.load(obj.id),
    current_crowds: async (obj, _, { loaders }, __) =>
      await loaders.place.currentCrowds.load(obj.id),
    current_queues: async (obj, _, { loaders }, __) =>
      await loaders.place.currentQueues.load(obj.id),
  },
};

export const place = createModule({
  id: "place",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

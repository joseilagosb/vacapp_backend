import { createModule, gql } from "graphql-modules";
import model from "../models";

const { PlaceWorkingDay } = model;

const typeDefs = [
  gql`
    extend type Query {
      allPlaceWorkingDays: [PlaceWorkingDay]
      placeWorkingDaysByPlace(place_id: ID!): [PlaceWorkingDay]
    }
    type PlaceWorkingDay {
      id: ID!
      day_of_week: Int
      opening_time: String
      closing_time: String
    }
  `,
];

const resolvers = {
  Query: {
    allPlaceWorkingDays: async (obj, args, context, info) =>
      PlaceWorkingDay.findAll(),
    placeWorkingDaysByPlace: async (obj, args, context, info) =>
      PlaceWorkingDay.findAll({
        where: {
          place_id: args.place_id,
        },
      }),
  },
};

export const placeWorkingDay = createModule({
  id: "placeWorkingDay",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

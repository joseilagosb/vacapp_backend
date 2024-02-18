import { createModule, gql } from "graphql-modules";
import model from "../models";

const { CurrentCrowd } = model;

const typeDefs = [
  gql`
    extend type Query {
      currentCrowdsByPlace(place_id: ID!): [CurrentCrowd]
    }
    type CurrentCrowd {
      id: ID!
      place_id: Int
      people_no: Int
      crowd_day_of_week: Int
      crowd_hour: Int
    }
  `,
];

const resolvers = {
  Query: {
    currentCrowdsByPlace: async (obj, args, context, info) =>
      CurrentCrowd.findAll({
        where: {
          place_id: args.place_id,
        },
      }),
  },
};

export const currentCrowd = createModule({
  id: "currentCrowd",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

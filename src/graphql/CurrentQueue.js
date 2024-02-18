import { createModule, gql } from "graphql-modules";
import model from "../models";

const { CurrentQueue } = model;

const typeDefs = [
  gql`
    extend type Query {
      currentQueuesByPlace(place_id: ID!): [CurrentQueue]
    }
    type CurrentQueue {
      id: ID!
      place_id: Int
      people_no: Int
      queue_day_of_week: Int
      queue_hour: Int
    }
  `,
];

const resolvers = {
  Query: {
    currentQueuesByPlace: async (obj, args, context, info) =>
      CurrentQueue.findAll({
        where: {
          place_id: args.place_id,
        },
      }),
  },
};

export const currentQueue = createModule({
  id: "currentQueue",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

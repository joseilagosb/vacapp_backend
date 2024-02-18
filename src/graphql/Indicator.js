import { createModule, gql } from "graphql-modules";
import model from "../models";

const { Indicator } = model;

const typeDefs = [
  gql`
    extend type Query {
      allIndicators: [Indicator]
    }
    type Indicator {
      id: ID!
      indicator_name: String
      indicator_type: Int
      indicator_description: String
      indicator_value: Float
      opinion_no: Int
    }
  `,
];

const resolvers = {
  Query: {
    allIndicators: async (obj, args, context, info) => Indicator.findAll(),
  },
};

export const indicator = createModule({
  id: "indicator",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

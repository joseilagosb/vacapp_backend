import { createModule, gql } from "graphql-modules";
import model from "../models/index.js";

const { Service } = model;

const typeDefs = [
  gql`
    extend type Query {
      allServices: [Service]
    }
    type Service {
      id: ID!
      service_name: String
      service_description: String
    }
  `,
];

const resolvers = {
  Query: {
    allServices: async (obj, args, context, info) => Service.findAll(),
  },
};

export const service = createModule({
  id: "service",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

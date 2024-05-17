import { TypeDefs, createModule, gql } from "graphql-modules";

import model from "../models/index";
const { Service } = model;

import { Resolvers } from "../ts/types/graphql/resolvers.types.js";

const typeDefs: TypeDefs = [
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

const resolvers: Resolvers = {
  Query: {
    allServices: async () => Service.findAll(),
  },
};

export const service = createModule({
  id: "service",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

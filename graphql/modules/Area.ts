import { TypeDefs, createModule, gql } from "graphql-modules";

import Area from "../../database/models/Area";

import { Resolvers } from "../../ts/types/graphql/resolvers.types";

const typeDefs: TypeDefs = [
  gql`
    extend type Query {
      allAreas: [Area]
    }
    type Area {
      id: ID!
      area_name: String
      coordinates: [Coordinate]
    }
  `,
];

const resolvers: Resolvers = {
  Query: { allAreas: async () => Area.findAll() },
  Area: {
    coordinates: async (obj, __, { loaders }, ____) => await loaders.area.coordinates.load(obj.id),
  },
};

export const area = createModule({
  id: "area",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

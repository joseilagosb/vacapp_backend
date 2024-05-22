import { TypeDefs, createModule, gql } from "graphql-modules";

import PlaceType from "../models/PlaceType";

import { Resolvers } from "../ts/types/graphql/resolvers.types.js";

const typeDefs: TypeDefs = [
  gql`
    extend type Query {
      allPlaceTypes: [PlaceType]
    }
    type PlaceType {
      id: ID!
      place_type_name: String
    }
  `,
];

const resolvers: Resolvers = {
  Query: {
    allPlaceTypes: async () => PlaceType.findAll(),
  },
};

export const placeType = createModule({
  id: "place_type",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

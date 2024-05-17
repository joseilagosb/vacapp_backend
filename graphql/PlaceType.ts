import { TypeDefs, createModule, gql } from "graphql-modules";

import model from "../models/index";
import { Resolvers } from "../ts/types/graphql/resolvers.types.js";
import { PlaceType } from "../ts/types/graphql/typedefs.types";
const { PlaceType } = model;

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

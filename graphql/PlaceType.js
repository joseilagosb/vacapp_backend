import { createModule, gql } from "graphql-modules";
import model from "../models";

const { PlaceType } = model;

const typeDefs = [
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

const resolvers = {
  Query: {
    allPlaceTypes: async (obj, args, context, info) => PlaceType.findAll(),
  },
};

export const placeType = createModule({
  id: "place_type",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

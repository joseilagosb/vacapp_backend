import { createModule, gql } from "graphql-modules";
import model from "../models/index.js";

const { Coordinate } = model;

const typeDefs = [
  gql`
    scalar Decimal

    type MyType {
      myField: Decimal
    }

    type Coordinate {
      id: ID!
      latitude: Decimal
      longitude: Decimal
    }
  `,
];

export const coordinate = createModule({
  id: "coordinate",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: {},
});

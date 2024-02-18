import { createModule, gql } from "graphql-modules";
import model from '../models';

const { Coordinate } = model;

const typeDefs = [
  gql`
    scalar Decimal
      
    type MyType {
    myField: Decimal
    }

    extend type Query {
      allCoordinates: [Coordinate]
    }
    type Coordinate {
      id: ID!
      latitude: Decimal
      longitude: Decimal      
    }
  `,
];

const resolvers = {
  Query: {
    allCoordinates: async (obj, args, context, info) => Coordinate.findAll(),
  },
};

export const coordinate = createModule({
  id: "coordinate",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

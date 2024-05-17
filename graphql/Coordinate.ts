import { TypeDefs, createModule, gql } from "graphql-modules";

const typeDefs: TypeDefs = [
  gql`
    scalar Decimal

    type Query

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

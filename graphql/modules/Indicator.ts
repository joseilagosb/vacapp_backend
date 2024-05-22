import { Resolvers, TypeDefs, createModule, gql } from "graphql-modules";
import Indicator from "../../database/models/Indicator";

const typeDefs: TypeDefs = [
  gql`
    extend type Query {
      allIndicators: [Indicator]
    }
    type Indicator {
      id: ID!
      indicator_name: String
      indicator_type: Int
      indicator_description: String
    }
    type PlaceIndicator {
      id: ID!
      indicator_name: String
      indicator_type: Int
      indicator_description: String
      indicator_value: Float
      opinion_no: Int
    }
  `,
];

const resolvers: Resolvers = {
  Query: {
    allIndicators: async () => Indicator.findAll(),
  },
};

export const indicator = createModule({
  id: "indicator",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

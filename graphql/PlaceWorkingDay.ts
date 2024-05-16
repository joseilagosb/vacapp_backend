import { createModule, gql } from "graphql-modules";

const typeDefs = [
  gql`
    type PlaceWorkingDay {
      id: ID!
      day_of_week: Int
      opening_time: String
      closing_time: String
    }
  `,
];

export const placeWorkingDay = createModule({
  id: "placeWorkingDay",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: {},
});

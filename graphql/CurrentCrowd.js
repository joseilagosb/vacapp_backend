import { createModule, gql } from "graphql-modules";

const typeDefs = [
  gql`
    type CurrentCrowd {
      id: ID!
      place_id: Int
      people_no: Int
      crowd_day_of_week: Int
      crowd_hour: Int
    }
  `,
];

export const currentCrowd = createModule({
  id: "currentCrowd",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: {},
});

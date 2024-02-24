import { createModule, gql } from "graphql-modules";

const typeDefs = [
  gql`
    type CurrentQueue {
      id: ID!
      place_id: Int
      people_no: Int
      queue_day_of_week: Int
      queue_hour: Int
    }
  `,
];

export const currentQueue = createModule({
  id: "currentQueue",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: {},
});

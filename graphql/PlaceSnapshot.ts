import { createModule, gql } from "graphql-modules";
import { getPlaceSnapshot } from "../queries/place_snapshot";
import { getAllPlaceSnapshots } from "../queries/all_place_snapshots";

const typeDefs = [
  gql`
    extend type Query {
      placeSnapshot(place_id: Int, day: Int, hour: Int): PlaceSnapshot
      allPlaceSnapshots(day: Int, hour: Int): [PlaceSnapshot]
    }
    type PlaceSnapshot {
      place_id: ID!
      day_of_week: Int
      hour_of_day: Int
      crowd_people_no: Int
      queue_people_no: Int
      covid_safety_score: Float
      service_quality_score: Float
    }
  `,
];

const resolvers = {
  Query: {
    placeSnapshot: async (obj, args, context, info) =>
      getPlaceSnapshot(args.place_id, args.day, args.hour),
    allPlaceSnapshots: async (obj, args, context, info) =>
      getAllPlaceSnapshots(args.day, args.hour),
  },
};

export const placeSnapshot = createModule({
  id: "place_snapshot",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

import { createModule, gql } from "graphql-modules";
import model from "../models";

const { Area } = model;

const typeDefs = [
  gql`
    extend type Query {
      allAreas: [Area]
    }
    type Area {
      id: ID!
      area_name: String
      coordinates: [Coordinate]
    }
  `,
];

const resolvers = {
  Query: {
    allAreas: async (obj, args, context, info) => Area.findAll(),
  },
  Area: {
    coordinates: async (obj, args, context, info) => await context.areaLoader.coordinates.load(obj.id),
  },
};

export const area = createModule({
  id: "area",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

import { createModule, gql } from "graphql-modules";
import model from "../models";

const { Area, Coordinate } = model;

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
    coordinates: async (obj, args, context, info) =>
      Coordinate.findAll({
        include: [
          {
            model: Area,
            as: "areas",
            where: { id: obj.id },
          },
        ],
      }),
  },
};

export const area = createModule({
  id: "area",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

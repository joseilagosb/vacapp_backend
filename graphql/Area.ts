import { TypeDefs, createModule, gql } from "graphql-modules";

import model from "../models";
const { Area, Coordinate } = model;

import { Resolvers } from "../ts/types/graphql/resolvers.types";

const typeDefs: TypeDefs = [
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

const resolvers: Resolvers = {
  Query: {
    allAreas: async () => Area.findAll(),
  },
  Area: {
    coordinates: (obj, __, ___, ____) =>
      Coordinate.findAll({
        include: {
          model: Area,
          as: "areas",
          where: { id: obj.id },
        },
      }),
    // coordinates: async (
    //   obj: Area,
    //   args: EmptyArgs,
    //   context: GraphQLContext,
    //   info: GraphQLResolveInfo
    // ) => await context.areaLoader.coordinates.load(obj.id),
  },
};

export const area = createModule({
  id: "area",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

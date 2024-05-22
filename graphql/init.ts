import { Express } from "express";
import { createApplication } from "graphql-modules";
import { applyMiddleware } from "graphql-middleware";
import { ApolloServer } from "apollo-server-express";

import { getGraphqlContext } from "./context";
import { permissions } from "./permissions";
import { getAllGraphqlModules } from "../utils/graphql";

const modules = getAllGraphqlModules();

// Inicializa el servidor Apollo para levantar la API endpoint
export const initApolloServer = async (app: Express) => {
  const graphQLApplication = createApplication({ modules: modules });
  const schema = graphQLApplication.createSchemaForApollo();

  // El servidor requiere el middleware de permisos de usuario (autorización) y las funciones de contexto
  // (los data loaders usados por los resolvers)
  const apolloServer = new ApolloServer({
    schema: applyMiddleware(schema, permissions),
    context: getGraphqlContext,
    csrfPrevention: true,
    introspection: process.env.NODE_ENV !== "production",
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
};

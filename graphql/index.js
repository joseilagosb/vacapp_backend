import fs from "fs";
import path from "path";
const basename = path.basename(__filename);

import { createApplication } from "graphql-modules";
import { applyMiddleware } from "graphql-middleware";
import { ApolloServer } from "apollo-server-express";

import { permissions } from "../services/graphql/permissions";
import { addToContext } from "../services/graphql/context";

// Cargamos todos los módulos GraphQL almacenados en este directorio
const graphqlModules = [];
fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
  })
  .forEach((file) => {
    const module = require(path.join(__dirname, file));
    graphqlModules.push(module[Object.keys(module)[0]]);
  });

// Inicializa el servidor Apollo para levantar la API endpoint
export const initApolloServer = async (app) => {
  const graphQLApplication = createApplication({ modules: graphqlModules });
  const schema = graphQLApplication.createSchemaForApollo();

  // El servidor requiere el middleware de permisos de usuario (autorización) y las funciones de contexto
  // (los data loaders usados por los resolvers)
  const apolloServer = new ApolloServer({
    schema: applyMiddleware(schema, permissions),
    context: addToContext,
    csrfPrevention: true,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
};

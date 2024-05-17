import fs from "fs";
import path from "path";
const basename = path.basename(__filename);

import { Express } from "express";

import { Module, createApplication } from "graphql-modules";
import { applyMiddleware } from "graphql-middleware";
import { ApolloServer } from "apollo-server-express";

import { permissions } from "../services/graphql/permissions";
// import { addToContext } from "../services/graphql/context";

import dotenv from "dotenv";
dotenv.config();

// Cargamos todos los módulos GraphQL almacenados en este directorio
const graphqlModules: Module[] = [];
graphqlModules.push(require("./Area.ts")["area"]);
graphqlModules.push(require("./Coordinate.ts")["coordinate"]);
graphqlModules.push(require("./PlaceType.ts")["placeType"]);
graphqlModules.push(require("./Service.ts")["service"]);
graphqlModules.push(require("./Indicator.ts")["indicator"]);
graphqlModules.push(require("./CurrentCrowd.ts")["currentCrowd"]);
graphqlModules.push(require("./CurrentQueue.ts")["currentQueue"]);
graphqlModules.push(require("./Place.ts")["place"]);
graphqlModules.push(require("./PlaceWorkingDay.ts")["placeWorkingDay"]);

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts";
//   })
//   .forEach((file) => {
//     const module = require(path.join(__dirname, file));
//     console.log(file);
//     graphqlModules.push(module[Object.keys(module)[0]]);
//   });

// Inicializa el servidor Apollo para levantar la API endpoint
export const initApolloServer = async (app: Express) => {
  const graphQLApplication = createApplication({ modules: graphqlModules });
  const schema = graphQLApplication.createSchemaForApollo();

  // El servidor requiere el middleware de permisos de usuario (autorización) y las funciones de contexto
  // (los data loaders usados por los resolvers)
  const apolloServer = new ApolloServer({
    schema: applyMiddleware(schema, permissions),
    // context: addToContext,
    csrfPrevention: true,
    introspection: process.env.NODE_ENV !== "production",
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
};

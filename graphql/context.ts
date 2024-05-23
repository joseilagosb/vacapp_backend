import { getCurrentUser } from "../services/authentication";

import { GraphQLContext } from "../ts/types/graphql/context.types";

// Funciones de utilidad para reducir el número de consultas a la base de datos (problema N + 1) y almacenar
// en caché operaciones realizadas con anterioridad. Especialmente útil para consultas exigentes como allPlaces(), que
// requiere la consulta de varias tablas relacionadas a Place.
const getAllLoaders = () => {
  const placeLoaders = require("./loaders/area").default;
  const areaLoaders = require("./loaders/place").default;
  return { loaders: { ...placeLoaders, ...areaLoaders } };
};

// Inserta en el context de la API el usuario actual para autorización de consultas, y los loaders para optimización de queries
export const getGraphqlContext = ({ req }): GraphQLContext => {
  const user = getCurrentUser(req);
  const loaders = getAllLoaders();
  return { user, ...loaders };
};

import { GraphQLError } from "graphql";
import { rule, shield, allow, deny } from "graphql-shield";

import { IMiddlewareGenerator } from "graphql-middleware";

const isAuthenticated = rule()((_, __, context) => {
  return context.user !== undefined;
});

// Por defecto, todas las rutas requieren autenticación salvo las de inicio de sesión y registro
export const permissions: IMiddlewareGenerator<any, any, any> = shield(
  {
    Query: { "*": isAuthenticated },
    Mutation: {
      "*": isAuthenticated,
      login: allow,
      // signUp está habilitado en el entorno de desarrollo para poder crear un usuario de prueba fácilmente
      signUp: process.env.NODE_ENV == "development" ? allow : deny,
    },
  },
  {
    fallbackError: new GraphQLError(
      "No estás autorizado a acceder a este recurso. Debe iniciar sesión con un usuario autorizado.",
      { extensions: { code: "UNAUTHENTICATED", http: { status: 401 } } }
    ),
  }
);

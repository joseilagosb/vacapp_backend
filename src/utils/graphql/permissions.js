import { GraphQLError } from "graphql";
import { rule, shield, allow, deny } from "graphql-shield";

const isAuthenticated = rule()((obj, args, context) => {
  return context.user !== undefined;
});

export const permissions = shield(
  {
    Query: {
      "*": isAuthenticated,
    },
    Mutation: {
      "*": isAuthenticated,
      login: allow,
      signUp: deny,
    },
  },
  {
    fallbackError: new GraphQLError(
      "No estás autorizado a acceder a este recurso. Debe iniciar sesión con un usuario autorizado.",
      { extensions: { code: "UNAUTHENTICATED", http: { status: 401 } } }
    ),
  }
);

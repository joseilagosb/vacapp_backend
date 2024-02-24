import { createApplication } from "graphql-modules";
import { applyMiddleware } from "graphql-middleware";
import { ApolloServer } from "apollo-server-express";

import { modules } from "../../graphql";
import { addToContext } from "./context";
import { permissions } from "./permissions";

export const initApolloServer = async (app) => {
  const graphQLApplication = createApplication({
    modules: modules,
  });
  const schema = graphQLApplication.createSchemaForApollo();
  const apolloServer = new ApolloServer({
    schema: applyMiddleware(schema, permissions),
    context: addToContext,
    csrfPrevention: true,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
};

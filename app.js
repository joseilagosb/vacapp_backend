import express from "express";
import { createApplication } from "graphql-modules";
import { applyMiddleware } from "graphql-middleware";
import { ApolloServer } from "apollo-server-express";

import { modules } from "./src/graphql";
import { addUserToContext } from "./src/graphql/context";
import { permissions } from "./src/graphql/permissions";

const app = express();

async function startApolloServer() {
  const graphQLApplication = createApplication({
    modules: modules,
  });
  const schema = graphQLApplication.createSchemaForApollo();
  const apolloServer = new ApolloServer({ schema: applyMiddleware(schema, permissions), context: addUserToContext });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startApolloServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hola",
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

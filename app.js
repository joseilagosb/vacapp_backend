import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createApplication } from "graphql-modules";
import { modules } from "./src/graphql";

const app = express();

async function startApolloServer() {
  const graphQLApplication = createApplication({
    modules: modules,
  });
  const schema = graphQLApplication.createSchemaForApollo();
  const apolloServer = new ApolloServer({ schema });

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

import express, { Express } from "express";

import "./database/init";

import { initApolloServer } from "./graphql/init";

const app: Express = express();

initApolloServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const port = 3000;
app.listen(port, () => {
  console.log(`Vacapp Backend Application listening at http://localhost:${port}`);
});

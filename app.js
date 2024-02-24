import express from "express";
import { initApolloServer } from "./src/utils/graphql/init";

const app = express();

initApolloServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const port = 3000;
app.listen(port, () => {
  console.log(`Vacapp Backend Application listening at http://localhost:${port}`);
});

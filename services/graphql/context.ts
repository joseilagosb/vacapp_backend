import { getCurrentUser } from "../authentication";
// import loaders from "./data_loaders";

import { GraphQLContext } from "../../ts/types/graphql/context.types";

export const addToContext = ({ req }): GraphQLContext => {
  const user = getCurrentUser(req);
  return { user };
};

import { getCurrentUser } from "../services/authentication";
// import loaders from "./data_loaders";

import { GraphQLContext } from "../ts/types/graphql/context.types";

export const getGraphqlContext = ({ req }): GraphQLContext => {
  const user = getCurrentUser(req);
  return { user };
};

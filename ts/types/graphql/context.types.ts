import jsonwebtoken from "jsonwebtoken";

import { DataLoaders } from "./loaders.types";

export type GraphQLContext = {
  user?: string | jsonwebtoken.JwtPayload;
  loaders?: DataLoaders;
};

import jsonwebtoken from "jsonwebtoken";

export type GraphQLContext = {
  user?: string | jsonwebtoken.JwtPayload;
  loaders?: any;
};

import jsonwebtoken from "jsonwebtoken";

export type GraphQLContext = {
  user?: jsonwebtoken.Jwt & jsonwebtoken.JwtPayload;
  loaders: any;
};

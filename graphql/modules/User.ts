import { TypeDefs, createModule, gql } from "graphql-modules";
import { signUpUser, loginUser } from "../../services/authentication";
import { Resolvers } from "../../ts/types/graphql/resolvers.types";

const typeDefs: TypeDefs = [
  gql`
    type Query

    type Mutation {
      login(username: String!, password: String!): AuthenticationPayload
      signUp(username: String!, password: String!): AuthenticationPayload
    }
    type AuthenticationPayload {
      token: String!
      user: User!
      message: String
    }
    type User {
      username: String
      password: String
    }
  `,
];

const resolvers: Resolvers = {
  Mutation: {
    login: async (_, args, __, ___) => loginUser(args.username, args.password),
    signUp: async (_, args, __, ___) => signUpUser(args.username, args.password),
  },
};

export const user = createModule({
  id: "user",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

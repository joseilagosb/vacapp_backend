import { TypeDefs, createModule, gql } from "graphql-modules";
import { signUpUser, loginUser } from "../services/authentication";

const typeDefs: TypeDefs = [
  gql`
    type Query

    type Mutation {
      login(username: String!, password: String!): AuthPayload
      signUp(username: String!, password: String!): AuthPayload
    }
    type AuthPayload {
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

const resolvers = {
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

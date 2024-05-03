import { createModule, gql } from "graphql-modules";
import model from "../models";
import { signUpUser, loginUser } from "../services/authentication";

const { User } = model;

const typeDefs = [
  gql`
    extend type Query {
      allUsers: [User]
      userById(id: ID!): User
    }
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
  Query: {
    allUsers: async (obj, args, context, info) => User.findAll(),
  },
  Mutation: {
    login: async (obj, args, context, info) => loginUser(args.username, args.password),
    signUp: async (obj, args, context, info) => signUpUser(args.username, args.password),
  },
};

export const user = createModule({
  id: "user",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

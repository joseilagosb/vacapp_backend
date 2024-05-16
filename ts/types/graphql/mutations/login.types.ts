import { AuthPayload, User } from "../typedefs.types";
import { Exact, Maybe, Scalars } from "../utils.types";

export type LoginMutationVariables = Exact<{
  username: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login?: Maybe<AuthPayload>;
};

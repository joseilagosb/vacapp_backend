import User from "../../../database/models/User";

export type AuthenticationPayload = {
  token: string;
  message: string;
  user: User;
};

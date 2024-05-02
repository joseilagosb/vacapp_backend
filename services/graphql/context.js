import { getCurrentUser } from "../authentication";
import loaders from "./data_loaders";

export const addToContext = ({ req }) => {
  const user = getCurrentUser(req);
  return { ...user, ...loaders };
};

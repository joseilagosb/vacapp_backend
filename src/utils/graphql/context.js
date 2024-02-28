import loaders from "./loaders";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const getCurrentUser = (req) => {
  const token = (req.get("Authorization") || "").replace("Bearer ", "");
  try {
    if (token) {
      const user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
      return { user };
    }
  } catch {
    return {};
  }
};

export const addToContext = ({ req }) => {
  const user = getCurrentUser(req);
  return { ...user, ...loaders };
};

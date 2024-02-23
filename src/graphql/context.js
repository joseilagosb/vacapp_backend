import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const addUserToContext = ({ req }) => {
  const token = (req.get("Authorization") || "").replace("Bearer", "");
  try {
    if (token) {
      const user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
      return { user };
    }
  } catch {
    return {};
  }
};

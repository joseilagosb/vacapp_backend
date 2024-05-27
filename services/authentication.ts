import jsonwebtoken, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "../database/models/User";

import { validateExistingUser, validateNewUser } from "./user_validation";

import { AuthenticationPayload } from "../ts/types/services/authentication.types";

import dotenv from "dotenv";
dotenv.config();

const signToken = (id: string, username: string) =>
  jsonwebtoken.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const signUpUser = async (
  username: string,
  password: string
): Promise<AuthenticationPayload> => {
  try {
    await validateNewUser(username, password);
    const user = await User.create({
      username: username,
      password: await bcrypt.hash(password, 10),
    });
    const token = signToken(user.id, user.username);
    return {
      token,
      user,
      message:
        "Se ha creado el usuario con éxito. Guarda este token, con él podrás hacer consultas a la API en tu entorno local.",
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUser = async (
  username: string,
  password: string
): Promise<AuthenticationPayload> => {
  try {
    const user = await validateExistingUser(username, password);
    const token = signToken(user.id, user.username);
    return {
      token,
      user,
      message:
        "Has iniciado sesión con éxito. Recuerda guardar este token para realizar consultas a la API.",
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCurrentUser = (req): JwtPayload | undefined => {
  const token = (req.get("Authorization") || "").replace("Bearer ", "");
  try {
    if (token) {
      const user = jsonwebtoken.verify(token, process.env.JWT_SECRET) as JwtPayload;
      return user;
    }
  } catch (error) {
    return undefined;
  }
};

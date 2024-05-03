import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { isValidExistingUser, isValidNewUser } from "./user_validation";

import dotenv from "dotenv";
dotenv.config();

import model from "../models";
const { User } = model;

const signToken = (id, username) => jsonwebtoken.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const signUpUser = async (username, password) => {
  try {
    const { isValidUser, error } = await isValidNewUser(username, password);
    if (!isValidUser) {
      throw new Error(error);
    }
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

export const loginUser = async (username, password) => {
  try {
    const { isValidUser, user, error } = await isValidExistingUser(username, password);
    if (!isValidUser) {
      throw new Error(error);
    }
    const token = signToken(user.id, user.username);
    return {
      token,
      user,
      message: "Has iniciado sesión con éxito. Recuerda guardar este token para realizar consultas a la API.",
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCurrentUser = (req) => {
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

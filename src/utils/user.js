import model from "../models";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const { User } = model;

export const signUpUser = async (username, password) => {
  try {
    const user = await User.create({
      username: username,
      password: await bcrypt.hash(password, 10),
    });
    const token = getToken(user.id, user.username);
    return { token, user };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUser = async (username, password) => {
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      throw new Error("El nombre de usuario o contraseña no son válidos");
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error("El nombre de usuario o contraseña no son válidos");
    }
    const token = getToken(user.id, user.username);
    return { token, user };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getToken = (id, username) =>
  jsonwebtoken.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: "7d" });

import bcrypt from "bcryptjs";

import model from "../models";
import { validatePassword } from "../utils/password";
const { User } = model;

export const isValidNewUser = async (username, password) => {
  const usernameIsTaken = await User.findOne({ where: { username } });
  if (usernameIsTaken) {
    return {
      isValidUser: false,
      error: "El nombre de usuario ingresado ya existe!",
    };
  }

  const { isValidPassword, error } = validatePassword(password);
  if (!isValidPassword) {
    return { isValidUser: false, error };
  }

  return { isValidUser: true };
};

export const isValidExistingUser = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (!user) {
    return {
      isValidUser: false,
      error: "El nombre de usuario o contraseña no son válidos.",
    };
  }

  const passwordsMatch = await bcrypt.compare(password, user.password);
  if (!passwordsMatch) {
    return {
      isValidUser: false,
      error: "El nombre de usuario o contraseña no son válidos.",
    };
  }

  return { isValidUser: true, user };
};

import bcrypt from "bcrypt";

import User from "../database/models/User";

import { getPasswordSchema } from "../utils/password";

import { IsValidPasswordResponse, IsValidUserResponse } from "../ts/types/services/user_validation.types";

// Valida la contraseña sobre las reglas establecidas en el schema
const isValidPassword = (password: string): IsValidPasswordResponse => {
  const errors = getPasswordSchema().validate(password, { list: true }) as Array<string>;
  let errorMessage = "";
  if (errors.length > 0) {
    for (let i = 0; i < errors.length; i++) {
      switch (errors[i]) {
        case "min":
          errorMessage += "La contraseña debe tener un mínimo de 8 caracteres.";
          break;
        case "max":
          errorMessage += "La contraseña supera el máximo permitido de 50 caracteres.";
          break;
        case "uppercase":
        case "lowercase":
        case "digits":
          errorMessage += "La contraseña debe contener mayúsculas, minúsculas y números.";
          break;
        default:
          errorMessage += "";
          break;
      }
      if (i < errors.length - 1) {
        errorMessage += " | ";
      }
    }
    return { isValidPassword: false, error: errorMessage };
  }
  return { isValidPassword: true };
};

export const isValidNewUser = async (username: string, password: string): Promise<IsValidUserResponse> => {
  const usernameIsTaken = await User.findOne({ where: { username } });
  if (usernameIsTaken) {
    return {
      isValidUser: false,
      error: "El nombre de usuario ingresado ya existe!",
    };
  }

  const response = isValidPassword(password);
  if (response.isValidPassword === false) {
    return { isValidUser: false, error: response.error };
  }

  return { isValidUser: true };
};

export const isValidExistingUser = async (username: string, password: string): Promise<IsValidUserResponse> => {
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

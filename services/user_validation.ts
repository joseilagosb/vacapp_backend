import bcrypt from "bcrypt";

import User from "../database/models/User";

import { getPasswordSchema } from "../utils/password";

// Valida la contraseña sobre las reglas establecidas en el schema
const validatePassword = (password: string) => {
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
    throw new Error(errorMessage);
  }
  return true;
};

const validateUniqueUsername = async (username: string) => {
  const usernameIsTaken = await User.findOne({ where: { username } });
  if (usernameIsTaken) {
    throw new Error("El nombre de usuario ingresado ya existe!");
  }
};

export const validateNewUser = async (username: string, password: string) => {
  await validateUniqueUsername(username);
  validatePassword(password);
};

export const validateExistingUser = async (username: string, password: string) => {
  const user = await User.findOne({ where: { username } });
  if (!user) {
    throw new Error("El nombre de usuario o contraseña no son válidos.");
  }

  const passwordsMatch = await bcrypt.compare(password, user.password);
  if (!passwordsMatch) {
    throw new Error("El nombre de usuario o contraseña no son válidos.");
  }

  return user;
};

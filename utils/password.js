import passwordValidator from "password-validator";

const getPasswordSchema = () => {
  const passwordSchema = new passwordValidator();

  // Establece las siguientes reglas para una contraseña:
  // 1. Mínimo de 8 caracteres
  // 2. Máximo de 50 caracteres
  // 3. Mayúsculas y minúsculas
  // 4. Dígitos (números)

  passwordSchema.is().min(8).is().max(50).has().uppercase().has().lowercase().has().digits();

  return passwordSchema;
};

// Valida la contraseña sobre las reglas establecidas en el schema
export const validatePassword = (password) => {
  const errors = getPasswordSchema().validate(password, { list: true });
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

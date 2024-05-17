import passwordValidator from "password-validator";

export const getPasswordSchema = (): passwordValidator => {
  const passwordSchema = new passwordValidator();

  // Establece las siguientes reglas para una contraseña:
  // 1. Mínimo de 8 caracteres
  // 2. Máximo de 50 caracteres
  // 3. Mayúsculas y minúsculas
  // 4. Dígitos (números)

  passwordSchema.is().min(8).is().max(50).has().uppercase().has().lowercase().has().digits();

  return passwordSchema;
};

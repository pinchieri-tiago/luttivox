import z from "zod";

export const passwordSchema = z
  .string()
  .min(1, "A senha é obrigatória!")
  .min(6, "A senha deve ter no mínimo 6 caracteres")
  .regex(
    /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/,
    "A senha deve conter letra maiúscula e caractere especial",
  );

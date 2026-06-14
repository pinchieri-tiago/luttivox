import z from "zod";

export const nameSchema = z
  .string()
  .min(1, "O nome é obrigatório!")
  .max(255, "O nome deve ter no máximo 255 caracteres!");

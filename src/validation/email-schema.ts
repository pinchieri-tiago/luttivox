import z from "zod";

export const emailSchema = z
  .string()
  .min(1, "O email é obrigatório")
  .pipe(z.email("Email inválido!"));

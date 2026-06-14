import z from "zod";

export const confirmPasswordSchema = z
  .string()
  .min(1, "A confirmação de senha é obrigatória");

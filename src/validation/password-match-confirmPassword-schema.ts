import z from "zod";
import { passwordSchema } from "./password-schema";
import { confirmPasswordSchema } from "./confirm-password-schema";

export const passwordMatchConfirmPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais!",
    path: ["confirmPassword"],
  });

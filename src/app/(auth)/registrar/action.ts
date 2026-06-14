"use server";

import { auth, signIn } from "@/lib/auth";
import { emailSchema } from "@/validation/email-schema";
import { nameSchema } from "@/validation/name-schema";
import { passwordMatchConfirmPasswordSchema } from "@/validation/password-match-confirmPassword-schema";
import { passwordSchema } from "@/validation/password-schema";
import z from "zod";
import { hashSync } from "bcrypt-edge";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";

const registerSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
  })
  .and(passwordMatchConfirmPasswordSchema);

export const register = async (data: z.infer<typeof registerSchema>) => {
  const session = await auth();

  if (session?.user?.id) {
    return {
      error: true,
      message: "Você já está logado!",
    };
  }

  const parseData = registerSchema.safeParse(data);

  if (!parseData.success) {
    return {
      error: true,
      message: parseData.error.issues[0].message,
    };
  }

  const passwordHash = hashSync(parseData.data.password, 12);

  try {
    await db.insert(users).values({
      name: parseData.data.name,
      email: parseData.data.email,
      password: passwordHash,
    });

    await signIn("credentials", {
      email: parseData.data.email,
      password: parseData.data.password,
      redirect: false,
    });

    return {
      error: false,
      message: "Registro realizado com sucesso!",
    };
  } catch (error) {
    if (error) {
      return {
        error: true,
        message: "Erro ao fazer cadastro!",
      };
    }
  }
};

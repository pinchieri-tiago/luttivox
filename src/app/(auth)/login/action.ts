"use server";

import { auth, signIn } from "@/lib/auth";
import { emailSchema } from "@/validation/email-schema";
import { passwordSchema } from "@/validation/password-schema";
import z from "zod";

const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const loginWithCredentials = async (
  data: z.infer<typeof loginSchema>,
) => {
  const session = await auth();

  if (session?.user?.id) {
    return {
      error: true,
      message: "Você já está logado!",
    };
  }

  const parseData = loginSchema.safeParse(data);

  if (!parseData.success) {
    return {
      error: true,
      message: parseData.error.issues[0].message,
    };
  }

  try {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    return {
      error: false,
      message: "Login Realizado com sucesso!",
    };
  } catch (error) {
    if (error) {
      return {
        error: true,
        message: "Credenciais inválidas",
      };
    }
  }
};

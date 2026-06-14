"use client";

import { emailSchema } from "@/validation/email-schema";
import { passwordSchema } from "@/validation/password-schema";
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { loginWithCredentials } from "@/app/(auth)/login/action";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const Login = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit = async (data: z.infer<typeof loginSchema>) => {
    const response = await loginWithCredentials(data);
    if (response?.error) {
      toast.error(response.message);
      return;
    }
    
    toast.success(response?.message || "Login realizado com sucesso!");
    router.push("/dashboard");
  };
  return (
    <div className="w-full">
      <div className="my-3 flex flex-col items-center justify-center">
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logotipo"
              width={200}
              height={200}
              className="w-44"
              priority
              loading="eager"
            />
          </Link>
        </div>
        <h2 className="font-bold">Entre com suas crêdenciais</h2>
      </div>
      <form className="w-full" onSubmit={form.handleSubmit(submit)}>
        <fieldset className="flex flex-col gap-3.5">
          <div className="w-full">
            <Controller
              name="email"
              control={form.control}
              render={({ field }) => (
                <div>
                  <label htmlFor="email" className="text-primary-700 font-bold">
                    Email
                  </label>
                  <input
                    {...field}
                    type="email"
                    placeholder="Digite seu email"
                    className="bg-secondary-50 text-primary-700 placeholder:text-primay-300 w-full rounded-3xl p-3 placeholder:font-bold"
                  />
                </div>
              )}
            />
            {form.formState.errors?.email && (
              <p className="mb-3 text-red-500">
                {form.formState.errors?.email?.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <Controller
              name="password"
              control={form.control}
              render={({ field }) => (
                <div>
                  <label
                    htmlFor="password"
                    className="text-primary-700 font-bold"
                  >
                    Senha
                  </label>
                  <input
                    {...field}
                    type="password"
                    placeholder="*************"
                    className="bg-secondary-50 text-primary-700 placeholder:text-primay-300 w-full rounded-3xl p-3 placeholder:font-bold"
                  />
                </div>
              )}
            />
            {form.formState.errors?.password && (
              <p className="mb-3 text-red-500">
                {form.formState.errors?.password?.message}
              </p>
            )}
          </div>
          <div className="my-5">
            <button
              disabled={form.formState.isSubmitting}
              className="from-primary-700 hover:from-secondary-600 hover:to-primary-700 to-secondary-600 flex w-full cursor-pointer justify-center rounded-xl bg-linear-to-r px-4 py-2 text-center text-lg font-bold text-white transition-all duration-500 disabled:opacity-40 md:text-lg"
            >
              {form.formState.isSubmitting ? (
                <div className="size-8 animate-spin rounded-full border-4 border-white border-t-transparent" />
              ) : (
                "Entrar"
              )}
            </button>
          </div>
        </fieldset>
      </form>
      <div className="mb-4 font-bold">
        Não tem conta?{" "}
        <Link href="/registrar" className="text-primary-500 underline">
          Registre-se
        </Link>
      </div>
    </div>
  );
};

import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compareSync } from "bcrypt-edge";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...token,
          id: (user as { id?: string }).id,
          email: user.email,
          name: user.name,
          image: user.image,
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user.id = token.id as string;
      session.user.email = token.email as string;
      session.user.name = token.name as string;
      session.user.image = token.image as string;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (credentials.email === "" || credentials.password === "")
          return null;

        const [user] = await db
          .select()
          .from(users)
          .where(eq(users.email, credentials.email as string));

        if (!user) return null;

        const verifyPassword = compareSync(
          credentials.password as string,
          user.password as string,
        );

        if (!verifyPassword) return null;

        return user;
      },
    }),
  ],
});

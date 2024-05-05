import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./database";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  //@ts-ignore
  adapter: PrismaAdapter(db as any),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialProvider({
      name: "credentials",
      credentials: {
        name: { label: "Name", type: "text", placeholder: "teste" },
        email: { label: "Email", type: "text", placeholder: "teste" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        const user = await db.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!user?.hashedPassword)
          throw new Error("Usuário não registrado através de credenciais.");

        const matchPassword =
          credentials &&
          (await bcrypt.compare(credentials?.password, user.hashedPassword));
        if (!matchPassword) throw new Error("Senha incorreta.");

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET,
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/auth",
  },
};

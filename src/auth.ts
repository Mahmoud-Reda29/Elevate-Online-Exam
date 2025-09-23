import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JSON_HEADER } from "./lib/constants/api/json-header";
import AppError from "./lib/utils/app-error";
import { LoginFields } from "./lib/types/auth/auth";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
    error: "/",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials: LoginFields | undefined) => {
        if (!credentials?.email || !credentials?.password) {
          throw new AppError("Email and password are required", 400);
        }

        const response = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          headers: {
            ...JSON_HEADER,
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        const payload: APIResponse<User> = await response.json();
        if ("code" in payload) {
          console.error("Login Error:", payload.message);
          throw new AppError(payload.message, payload.code);
        }

        return {
          id: payload.user._id,
          token: payload.token,
          user: payload.user,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user.user;
        token.token = user.token;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
};

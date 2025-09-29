import "server-only";

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";
import { AUTH_COOKIE } from "./auth-token";

export default async function getToken() {
  const token = cookies().get(AUTH_COOKIE)?.value;

  if (!token) return null;

  try {
    const jwt = await decode({
      token: token,
      secret: process.env.NEXTAUTH_SECRET!,
    });

    return jwt;
  } catch (error) {
    console.error("JWT decode error:", error);

    return null;
  }
}

"use server";

import { JSON_HEADER } from "@/lib/constants/api/json-header";
import { RegisterFields } from "@/lib/types/auth/auth";
import { User } from "next-auth";

export const registerAction = async (data: RegisterFields) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        ...JSON_HEADER,
      },
      body: JSON.stringify(data),
    });

    const payload: APIResponse<User> = await response.json();

    return payload;
  } catch (error) {
    throw error;
  }
};

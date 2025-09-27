"use server";

import { JSON_HEADER } from "@/lib/constants/api/json-header";
import { ForgotPasswordFields, ForgotPasswordRespone } from "@/lib/types/auth/auth";

export const forgotPasswordAction = async (data: ForgotPasswordFields) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/auth/forgotPassword`, {
      method: "POST",
      headers: {
        ...JSON_HEADER,
      },
      body: JSON.stringify(data),
    });

    const payload: APIResponse<ForgotPasswordRespone> = await response.json();

    return payload;
  } catch (error) {
    throw error;
  }
};

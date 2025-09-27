"use server";

import { JSON_HEADER } from "@/lib/constants/api/json-header";
import { ResetPasswordFields, ResetPasswordResponse } from "@/lib/types/auth/auth";

export const resetPasswordAction = async ({ email, newPassword }: ResetPasswordFields) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/auth/resetPassword`, {
      method: "PUT",
      headers: {
        ...JSON_HEADER,
      },
      body: JSON.stringify({ email, newPassword }),
    });

    const payload: APIResponse<ResetPasswordResponse> = await response.json();

    return payload;
  } catch (error) {
    throw error;
  }
};

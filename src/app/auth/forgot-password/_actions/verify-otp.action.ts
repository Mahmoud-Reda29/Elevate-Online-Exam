"use server";

import { JSON_HEADER } from "@/lib/constants/api/json-header";
import { VerifyOtpFields, VerifyOtpRespone } from "@/lib/types/auth/auth";

export const verifyOtpAction = async (data: VerifyOtpFields) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/auth/verifyResetCode`, {
      method: "POST",
      headers: {
        ...JSON_HEADER,
      },
      body: JSON.stringify(data),
    });

    const payload: APIResponse<VerifyOtpRespone> = await response.json();

    return payload;
  } catch (error) {
    throw error;
  }
};

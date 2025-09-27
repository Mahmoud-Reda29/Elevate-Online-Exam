"use client";
import React from "react";
import { useForgotPasswordFlow } from "../../_providers/forgot-password.provider";
import ForgotPasswordForm from "./forgot-password-form";
import VerifyOtpForm from "./verify-otp-form";
import ResetPasswordForm from "./reset-password-form";

export default function ForgotPasswordSteps() {
  // Context
  const { step } = useForgotPasswordFlow();

  return (
    <>
      {/* Step 1: Forgot Password  */}
      {step === 1 && <ForgotPasswordForm />}

      {/* Step 2: Verify OTP  */}
      {step === 2 && <VerifyOtpForm />}

      {/* Step 3: Reset Password  */}
      {step === 3 && <ResetPasswordForm />}
    </>
  );
}

import React from "react";
import { ForgotPasswordProvider } from "./_providers/forgot-password.provider";
import ForgotPasswordSteps from "./_components/forms";

export default function page() {
  return (
    <ForgotPasswordProvider>
      <ForgotPasswordSteps />
    </ForgotPasswordProvider>
  );
}

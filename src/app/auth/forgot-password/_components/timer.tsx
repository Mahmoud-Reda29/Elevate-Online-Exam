import React from "react";
import { Button } from "@/components/ui/button";
import { useForgotPasswordFlow } from "../_providers/forgot-password.provider";
import useForgotPassword from "../_hooks/use-forgot-password";

export default function ResendTimer() {
  // Context
  const { timer, setTimer, startTimer, email } = useForgotPasswordFlow();

  // Mutation
  const { forgotPassword } = useForgotPassword();

  // Functions
  const handleResend = () => {
    forgotPassword({ email });
    setTimer(60);
    startTimer();
  };

  if (timer > 0) {
    return (
      <div className="text-sm text-gray-500">
        You can request another code in: <span className="font-semibold">{timer}s</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-1 text-center">
      <span className="text-sm text-gray-500">Didn’t receive the code?</span>
      <Button variant="link" type="button" onClick={handleResend}>
        Resend code
      </Button>
    </div>
  );
}

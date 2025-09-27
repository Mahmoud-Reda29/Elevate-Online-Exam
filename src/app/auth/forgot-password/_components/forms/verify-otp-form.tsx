"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormsHeader from "@/app/auth/_components/forms-header";
import FormsError from "@/app/auth/_components/forms-error";
import FormsFooter from "@/app/auth/_components/forms-footer";
import { useForgotPasswordFlow } from "../../_providers/forgot-password.provider";
import useVerifyOtp from "../../_hooks/use-verify-otp";
import { VerifOtpInputs, VerifyOtpSchema } from "@/lib/schemes/auth/verify-otp.schema";
import { VerifyOtpFields } from "@/lib/types/auth/auth";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import ResendTimer from "../timer";

export default function VerifyOtpForm() {
  // Mutation
  const { isPending: isPending, error: verifyOtpError, verifyOtp } = useVerifyOtp();

  // Context
  const { setStep, email, timer, startTimer } = useForgotPasswordFlow();

  // Form & Validation
  const VerifyOtpForm = useForm<VerifOtpInputs>({
    defaultValues: {
      resetCode: "",
    },
    resolver: zodResolver(VerifyOtpSchema),
  });

  // Functions
  const onSubmitHandler = (data: VerifyOtpFields) => {
    verifyOtp(data, {
      onSuccess: () => {
        setStep(3);
      },
    });
  };

  // Effects
  useEffect(() => {
    if (timer === 60) {
      startTimer();
    }
  }, [timer, startTimer]);

  return (
    <div className="flex w-full flex-col gap-3">
      {/* Header */}
      <FormsHeader title="Verify OTP">
        <div>
          <p className="text-base font-normal text-gray-500">
            Please enter the 6-digits code we have sent to:
          </p>
          <div className="flex items-center gap-1">
            {/* Email user Set in Step(1) */}
            {email}

            {/* Edit Button */}
            <Button onClick={() => setStep(1)} type="button" variant={"link"} size={"default"}>
              Edit
            </Button>
          </div>
        </div>
      </FormsHeader>

      {/* Forgot Password Form */}
      <Form {...VerifyOtpForm}>
        <form onSubmit={VerifyOtpForm.handleSubmit(onSubmitHandler)} className="space-y-4">
          {/* ResetCode Field */}
          <FormField
            control={VerifyOtpForm.control}
            name="resetCode"
            render={({ field }) => (
              <FormItem>
                {/* ResetCode Label */}
                <FormLabel className="sr-only">Otp</FormLabel>

                {/* ResetCode Input */}
                <div className="flex flex-col items-center justify-center gap-6 text-center">
                  <FormControl>
                    {/* Otp Iput */}
                    <InputOTP {...field} maxLength={6}>
                      <InputOTPGroup className="justify-between gap-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <InputOTPSlot key={i} index={i} />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>

                  {/* Resend Message & Timer */}
                  <ResendTimer />
                </div>

                {/* Error Message */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Error */}
          <FormsError error={verifyOtpError?.message ?? null} />

          {/* Submit */}
          <Button
            variant={"default"}
            loading={isPending}
            disabled={isPending || !VerifyOtpForm.formState.isValid}
            type="submit"
            size={"lg"}
          >
            Verify Code
          </Button>
        </form>
      </Form>

      {/* Footer */}
      <FormsFooter page="forgot-password" />
    </div>
  );
}

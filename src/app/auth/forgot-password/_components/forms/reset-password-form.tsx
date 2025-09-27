"use client";
import React from "react";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormsHeader from "@/app/auth/_components/forms-header";
import FormsError from "@/app/auth/_components/forms-error";
import FormsFooter from "@/app/auth/_components/forms-footer";
import { useForgotPasswordFlow } from "../../_providers/forgot-password.provider";
import useResetPassword from "../../_hooks/use-reset-password";
import { ResetPasswordInputs, ResetPasswordSchema } from "@/lib/schemes/auth/reset-password.schema";
import { ResetPasswordFields } from "@/lib/types/auth/auth";

export default function ResetPasswordForm() {
  // Mutation
  const { isPending: isPending, error: ResetPasswordError, resetPassword } = useResetPassword();

  // Context
  const { email } = useForgotPasswordFlow();

  // Form & Validation
  const ResetPasswordForm = useForm<ResetPasswordInputs>({
    defaultValues: {
      email: email,
      newPassword: "",
      rePassword: "",
    },
    resolver: zodResolver(ResetPasswordSchema),
  });

  // Functions
  const onSubmitHandler = (data: ResetPasswordInputs) => {
    console.log("data from form", data);
    data.email = email;
    resetPassword({ email: data.email, newPassword: data.newPassword });
  };

  console.log("form valid:", ResetPasswordForm.formState.isValid);
  console.log("form errors:", ResetPasswordForm.formState.errors);

  return (
    <div className="flex w-full flex-col gap-3">
      {/* Header */}
      <FormsHeader title="Create a New Password">
        <p className="text-base font-normal text-gray-500">
          Create a new strong password for your account.
        </p>
      </FormsHeader>

      {/* Forgot Password Form */}
      <Form {...ResetPasswordForm}>
        <form onSubmit={ResetPasswordForm.handleSubmit(onSubmitHandler)} className="space-y-4">
          {/* Passowrd Field */}
          <FormField
            control={ResetPasswordForm.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                {/* Password Label */}
                <FormLabel>New Password</FormLabel>

                {/* Password Input */}
                <FormControl>
                  <Input
                    type="password"
                    placeholder="********"
                    error={!!ResetPasswordForm.formState.errors.newPassword}
                    {...field}
                  />
                </FormControl>

                {/* Error Message */}
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Confirm Passowrd Field */}
          <FormField
            control={ResetPasswordForm.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                {/* Confirm Password Label */}
                <FormLabel>Confirm New Password</FormLabel>

                {/* Confirm Password Input */}
                <FormControl>
                  <Input
                    type="password"
                    placeholder="********"
                    error={!!ResetPasswordForm.formState.errors.rePassword}
                    {...field}
                  />
                </FormControl>

                {/* Error Message */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Error */}
          <FormsError error={ResetPasswordError?.message ?? null} />

          {/* Submit */}
          <Button
            variant={"default"}
            loading={isPending}
            disabled={isPending || !ResetPasswordForm.formState.isValid}
            type="submit"
            size={"lg"}
          >
            Reset Password
          </Button>
        </form>
      </Form>

      {/* Footer */}
      <FormsFooter page="forgot-password" />
    </div>
  );
}

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
import useForgotPassword from "../../_hooks/use-forgot-password";
import {
  ForgotPasswordInputs,
  ForgotPasswordSchema,
} from "@/lib/schemes/auth/forgot-password.schema";
import FormsHeader from "@/app/auth/_components/forms-header";
import FormsError from "@/app/auth/_components/forms-error";
import FormsFooter from "@/app/auth/_components/forms-footer";
import { useForgotPasswordFlow } from "../../_providers/forgot-password.provider";
import { MoveRight } from "lucide-react";

export default function ForgotPasswordForm() {
  // Mutation
  const { isPending: isPending, error: forgotPasswordError, forgotPassword } = useForgotPassword();

  // Context
  const { setStep, setEmail } = useForgotPasswordFlow();

  // Form & Validation
  const ForgotPasswordForm = useForm<ForgotPasswordInputs>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(ForgotPasswordSchema),
  });

  // Functions
  const onSubmitHandler = (data: ForgotPasswordInputs) => {
    forgotPassword(data, {
      onSuccess: () => {
        setEmail(data.email);
        setStep(2);
      },
    });
  };

  return (
    <div className="flex w-full flex-col gap-3">
      {/* Header */}
      <FormsHeader title="Forgot Password">
        <p className="text-base font-normal text-gray-500">
          Don’t worry, we will help you recover your account.
        </p>
      </FormsHeader>

      {/* Forgot Password Form */}
      <Form {...ForgotPasswordForm}>
        <form onSubmit={ForgotPasswordForm.handleSubmit(onSubmitHandler)} className="space-y-4">
          {/* Email */}
          <FormField
            control={ForgotPasswordForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* Email Label */}
                <FormLabel>Email</FormLabel>

                {/* Email Input */}
                <FormControl>
                  <Input
                    type="email"
                    placeholder="user@example.com"
                    error={!!ForgotPasswordForm.formState.errors.email}
                    {...field}
                  />
                </FormControl>

                {/* Error Message */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Error */}
          <FormsError error={forgotPasswordError?.message ?? null} />

          {/* Submit */}
          <Button
            variant={"default"}
            loading={isPending}
            disabled={isPending || !ForgotPasswordForm.formState.isValid}
            type="submit"
            size={"lg"}
            rightIcon={<MoveRight size={18} />}
          >
            Continue
          </Button>
        </form>
      </Form>

      {/* Footer */}
      <FormsFooter page="forgot-password" />
    </div>
  );
}

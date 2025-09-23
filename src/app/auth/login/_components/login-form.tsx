"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInputs, LoginSchema } from "@/lib/schemes/auth/login.schema";
import FormsHeader from "../../_components/forms-header";
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
import useLogin from "../_hooks/use-login";
import Link from "next/link";
import FormsError from "../../_components/forms-error";

export default function LoginForm() {
  // Mutation
  const { isPending: isPending, error: loginError, login } = useLogin();

  // Form & Validation
  const LoginForm = useForm<LoginInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  // Functions
  const onSubmitHandler = (data: LoginInputs) => {
    login(data);
  };

  return (
    <div className="flex w-full flex-col gap-3 sm:w-4/6">
      {/* Header */}
      <FormsHeader title="Login" />

      {/* Login Form */}
      <Form {...LoginForm}>
        <form onSubmit={LoginForm.handleSubmit(onSubmitHandler)} className="w-full space-y-4">
          {/* Email */}
          <FormField
            control={LoginForm.control}
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
                    error={!!LoginForm.formState.errors.email}
                    {...field}
                  />
                </FormControl>

                {/* Error Message */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={LoginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                {/* Password Label */}
                <FormLabel>Password</FormLabel>

                {/* Password Input */}
                <FormControl>
                  <Input
                    type="password"
                    error={!!LoginForm.formState.errors.password}
                    placeholder="********"
                    {...field}
                  />
                </FormControl>

                {/* Error Message */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* forgot passowrd button */}
          <div className="flex">
            <Link href="/auth/forgot-password" className="ml-auto">
              <Button variant="link" size="default" className="p-0 text-sm font-normal">
                Forgot your password?
              </Button>
            </Link>
          </div>

          {/* Error */}
          <FormsError error={loginError?.message ?? null} />

          {/* Submit */}
          <Button
            variant={"default"}
            loading={isPending}
            disabled={isPending || !LoginForm.formState.isValid}
            type="submit"
            size={"lg"}
          >
            Login
          </Button>
        </form>
      </Form>

      {/* Register */}
      <div className="mt-9 text-center">
        Don’t have an account?
        <Link href={"/auth/register"}>
          <Button variant={"link"} size={"default"}>
            Create yours
          </Button>
        </Link>
      </div>
    </div>
  );
}

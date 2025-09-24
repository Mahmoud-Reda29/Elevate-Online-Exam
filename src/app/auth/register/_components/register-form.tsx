"use client";
import React from "react";
import FormsHeader from "../../_components/forms-header";
import { useForm } from "react-hook-form";
import { RegisterInputs, RegisterSchema } from "@/lib/schemes/auth/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useRegister from "../_hooks/use-register";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Button } from "@/components/ui/button";
import FormsFooter from "../../_components/forms-footer";
import FormsError from "../../_components/forms-error";

export default function RegisterForm() {
  // Mutation
  const { isPending, error: registerError, register } = useRegister();

  // Form & Validation
  const RegisterForm = useForm<RegisterInputs>({
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(RegisterSchema),
  });

  // Functions
  const onSubmitHandler = (data: RegisterInputs) => {
    register(data);
  };

  return (
    <div className="flex w-full flex-col gap-3 py-36">
      {/* Header */}
      <FormsHeader title="Register" />

      {/* Register Form */}
      <Form {...RegisterForm}>
        <form onSubmit={RegisterForm.handleSubmit(onSubmitHandler)} className="space-y-4">
          {/* FirstName & LastName */}
          <div className="flex w-full gap-4">
            {/* FirstName Field */}
            <FormField
              control={RegisterForm.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  {/* Label */}
                  <FormLabel>First Name</FormLabel>
                  {/* Input */}
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Mahmoud"
                      error={!!RegisterForm.formState.errors.firstName}
                      {...field}
                    />
                  </FormControl>

                  {/* Error */}
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* LastName Field */}
            <FormField
              control={RegisterForm.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  {/* Label */}
                  <FormLabel>Last Name</FormLabel>

                  {/* Input */}
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Reda"
                      error={!!RegisterForm.formState.errors.lastName}
                      {...field}
                    />
                  </FormControl>

                  {/* Error */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Username Field */}
          <FormField
            control={RegisterForm.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <FormLabel>Username</FormLabel>

                {/* Input */}
                <FormControl>
                  <Input
                    type="text"
                    placeholder="MahmoudReda29"
                    error={!!RegisterForm.formState.errors.username}
                    {...field}
                  />
                </FormControl>

                {/* Error */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={RegisterForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <FormLabel>Email</FormLabel>
                {/* Input */}
                <FormControl>
                  <Input
                    type="email"
                    placeholder="user@example.com"
                    error={!!RegisterForm.formState.errors.email}
                    {...field}
                  />
                </FormControl>

                {/* Error */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Field */}
          <FormField
            control={RegisterForm.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <FormLabel>Phone</FormLabel>

                {/* Input */}
                <FormControl>
                  <PhoneInput
                    international
                    defaultCountry="EG"
                    placeholder="123456789"
                    {...field}
                  />
                </FormControl>

                {/* Error */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={RegisterForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <FormLabel>Password</FormLabel>

                {/* Input */}
                <FormControl>
                  <Input
                    type="password"
                    placeholder="********"
                    error={!!RegisterForm.formState.errors.password}
                    {...field}
                  />
                </FormControl>

                {/* Error */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Re-Password */}
          <FormField
            control={RegisterForm.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <FormLabel>Confirm Password</FormLabel>

                {/* Input */}
                <FormControl>
                  <Input
                    type="password"
                    placeholder="********"
                    error={!!RegisterForm.formState.errors.rePassword}
                    {...field}
                  />
                </FormControl>

                {/* Error */}
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Error */}
          <FormsError error={registerError?.message ?? null} />

          {/* Submit */}
          <Button
            type="submit"
            variant="default"
            size="lg"
            className="mt-2 w-full"
            disabled={isPending || !RegisterForm.formState.isValid}
            loading={isPending}
          >
            Create Account
          </Button>

          {/* Footer */}
          <FormsFooter page="register" />
        </form>
      </Form>
    </div>
  );
}

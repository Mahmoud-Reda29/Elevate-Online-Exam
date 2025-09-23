import { LoginFields } from "@/lib/types/auth/auth";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export default function useLogin() {
  const { mutate, isPending, error } = useMutation({
    mutationFn: async ({ email, password }: LoginFields) => {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!response?.ok) {
        throw new Error(response?.error || "Login failed");
      }

      return response;
    },
    onSuccess: (data) => {
      toast.success("Logged in successfully!");

      // redirect after short delay
      setTimeout(() => {
        window.location.href = data?.url || "/";
      }, 1500);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
    retry: false,
  });

  return {
    login: mutate,
    isPending,
    error,
  };
}

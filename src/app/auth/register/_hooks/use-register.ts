import { useMutation } from "@tanstack/react-query";
import { RegisterFields } from "@/lib/types/auth/auth";
import { registerAction } from "@/app/auth/register/_actions/register.action";
import { toast } from "sonner";

export default function useRegister() {
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (data: RegisterFields) => {
      const response = await registerAction(data);

      console.log("response :", response);
      if ("code" in response) {
        throw new Error(response?.message || "Login failed");
      }

      return response;
    },
    onSuccess: () => {
      toast.success("Account Registered Successfully! please Login to continue");

      setTimeout(() => {
        window.location.href = "/auth/login";
      }, 1500);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return {
    register: mutate,
    isPending,
    error,
  };
}

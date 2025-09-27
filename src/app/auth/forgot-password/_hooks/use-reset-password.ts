import { useMutation } from "@tanstack/react-query";
import { ResetPasswordFields } from "@/lib/types/auth/auth";
import { toast } from "sonner";
import { resetPasswordAction } from "../_actions/reset-password.action";

export default function useResetPassword() {
  const { mutate, isPending, error } = useMutation({
    mutationFn: async ({ email, newPassword }: ResetPasswordFields) => {
      const response = await resetPasswordAction({ email, newPassword });

      console.log("respone from hook", response);
      if ("code" in response) {
        throw new Error(response?.message || "Reset Password failed");
      }

      return response;
    },
    onSuccess: () => {
      toast.success("Password Reset Successfully! please Login to continue");

      setTimeout(() => {
        window.location.href = "/auth/login";
      }, 1500);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return {
    resetPassword: mutate,
    isPending,
    error,
  };
}

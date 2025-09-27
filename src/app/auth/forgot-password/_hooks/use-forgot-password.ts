import { useMutation } from "@tanstack/react-query";
import { ForgotPasswordFields } from "@/lib/types/auth/auth";
import { toast } from "sonner";
import { forgotPasswordAction } from "../_actions/forgot-password.action";

export default function useForgotPassword() {
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (data: ForgotPasswordFields) => {
      const response = await forgotPasswordAction(data);

      if ("code" in response) {
        throw new Error(response?.message || "Forgot Password failed");
      }

      return response;
    },
    onSuccess: () => {
      toast.success("Otp Sent Successfully to your Email! please Verify it to Proceed");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return {
    forgotPassword: mutate,
    isPending,
    error,
  };
}

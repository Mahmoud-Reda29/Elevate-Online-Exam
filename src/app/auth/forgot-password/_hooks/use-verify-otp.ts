import { useMutation } from "@tanstack/react-query";
import { VerifyOtpFields } from "@/lib/types/auth/auth";
import { toast } from "sonner";
import { verifyOtpAction } from "../_actions/verify-otp.action";

export default function useVerifyOtp() {
  const { mutate, isPending, error } = useMutation({
    mutationFn: async (data: VerifyOtpFields) => {
      const response = await verifyOtpAction(data);

      if ("code" in response) {
        throw new Error(response?.message || "Otp Verification failed");
      }

      return response;
    },
    onSuccess: () => {
      toast.success("Otp Verified Successfully!");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return {
    verifyOtp: mutate,
    isPending,
    error,
  };
}

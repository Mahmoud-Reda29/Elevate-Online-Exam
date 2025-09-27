import z from "zod";

export const VerifyOtpSchema = z.object({
  resetCode: z.string().min(6, "Reset code must be 6 digits long"),
});

export type VerifOtpInputs = z.infer<typeof VerifyOtpSchema>;

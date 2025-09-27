import z from "zod";

export const ResetPasswordSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must contain at least one uppercase, lowercase, number, and special character",
      ),
    rePassword: z.string().min(8, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

export type ResetPasswordInputs = z.infer<typeof ResetPasswordSchema>;

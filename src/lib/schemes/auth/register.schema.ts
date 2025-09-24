import { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";
import z from "zod";

export const RegisterSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be at most 20 characters"),
    firstName: z
      .string()
      .min(3, "First name must be at least 3 characters")
      .max(30, "First name must be at most 30 characters"),
    lastName: z
      .string()
      .min(3, "Last name must be at least 3 characters")
      .max(30, "Last name must be at most 30 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must contain at least one uppercase, lowercase, number, and special character",
      ),
    rePassword: z.string().min(1, "Please confirm your password"),

    phone: z
      .string()
      .refine((value) => isValidPhoneNumber(value), {
        message: "Invalid phone number",
      })
      .transform((value) => {
        try {
          const phoneNumber = parsePhoneNumber(value);
          if (phoneNumber?.country === "EG") {
            return phoneNumber.nationalNumber.startsWith("0")
              ? phoneNumber.nationalNumber
              : "0" + phoneNumber.nationalNumber;
          }
          return value;
        } catch {
          return value;
        }
      }),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

export type RegisterInputs = z.infer<typeof RegisterSchema>;

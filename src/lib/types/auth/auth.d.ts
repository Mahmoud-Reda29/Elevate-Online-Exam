export type LoginFields = {
  email: string;
  password: string;
};

export type RegisterFields = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
};

export type ForgotPasswordFields = {
  email: string;
};

export type VerifyOtpFields = {
  resetCode: string;
};

export type ResetPasswordFields = {
  email: string;
  newPassword: string;
};

export type ForgotPasswordRespone = {
  info: string;
};

export type VerifyOtpRespone = {
  status: string;
};
export type ResetPasswordResponse = {
  token: string;
};

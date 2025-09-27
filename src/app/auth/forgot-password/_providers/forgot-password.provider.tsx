"use client";

import { createContext, useContext, useState, useRef, useCallback } from "react";

interface ForgotPasswordContext {
  email: string;
  setEmail: (email: string) => void;
  step: number;
  setStep: (step: number) => void;
  timer: number;
  setTimer: (timer: number) => void;
  startTimer: () => void;
  resetTimer: () => void;
}

const ForgotPasswordContext = createContext<ForgotPasswordContext | undefined>(undefined);

export const ForgotPasswordProvider = ({ children }: { children: React.ReactNode }) => {
  // States
  const [email, setEmail] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [timer, setTimer] = useState<number>(60);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Functions
  const startTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTimer(0);
  }, []);

  return (
    <ForgotPasswordContext.Provider
      value={{ email, setEmail, step, setStep, timer, setTimer, startTimer, resetTimer }}
    >
      {children}
    </ForgotPasswordContext.Provider>
  );
};

export const useForgotPasswordFlow = () => {
  const context = useContext(ForgotPasswordContext);
  if (context === undefined) {
    throw new Error("useForgotPassword must be used within a ForgotPasswordProvider");
  }
  return context;
};

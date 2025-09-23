"use client";
import * as React from "react";

import { cn } from "@/lib/utils/cn";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "./button";

interface InputProps extends React.ComponentProps<"input"> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    // States
    const [hide, setHide] = React.useState(true);

    // Functions
    const toggleType = () => setHide((prev) => !prev);

    if (type === "password") {
      return (
        <div className="relative w-full">
          {/* Input */}
          <input
            type={hide ? "password" : "text"}
            className={cn(
              "flex h-10 w-full rounded-md border border-gray-200 bg-background p-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              error && "border-red-600",
              className,
            )}
            ref={ref}
            {...props}
          />

          {/* Eye Toggle button */}
          <Button
            variant="ghost"
            type="button"
            onClick={toggleType}
            disabled={props.disabled}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:bg-transparent"
          >
            {hide ? (
              <EyeOff
                className={cn(
                  "size-[18px] text-zinc-400 dark:text-zinc-50",
                  props.disabled && "dark:text-zinc-600",
                )}
              />
            ) : (
              <Eye
                className={cn(
                  "size-[18px] text-zinc-400 dark:text-zinc-50",
                  props.disabled && "dark:text-zinc-600",
                )}
              />
            )}
          </Button>
        </div>
      );
    }

    // Default input
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-gray-200 bg-background p-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          error && "border-red-600 focus-visible:ring-red-600",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };

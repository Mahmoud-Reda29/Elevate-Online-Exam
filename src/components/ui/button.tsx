import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";
import { Spinner } from "./spinner";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[10px] p-5 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-200 disabled:text-gray-400 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-primary-foreground hover:bg-blue-700",
        "semi-destructive": "bg-red-50 text-red-600",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-blue-600 bg-blue-50 hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-gray-200 text-secondary-foreground hover:bg-gray-300",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-blue-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 w-full",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <>
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          disabled={loading || props.disabled}
          {...props}
        >
          {leftIcon && <span className="flex items-center">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="flex items-center">{rightIcon}</span>}
          {loading && <Spinner />}
        </Comp>
      </>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  `inline-flex items-center justify-center 
  rounded-3xl 
  pb-[15px] pt-[18px] px-6
  text-white text-base font-bold leading-none
  ring-offset-background transition-colors 
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
  disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        primary1: "bg-violet-500 hover:bg-indigo-400",
        primary2:
          "bg-gray-700 hover:bg-gray-950 text-slate-400 dark:text-indigo-100",
        secondary:
          "bg-slate-50 text-slate-400 dark:text-indigo-100 hover:bg-indigo-100",
        destructive: "bg-rose-500 hover:bg-red-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        streched: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary1",
      //   size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// icon support will be provided here.
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

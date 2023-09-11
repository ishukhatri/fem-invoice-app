import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-12 w-full 
          rounded border border-input border-indigo-100
          bg-white pt-[18px] pl-5 pb-4 
          text-gray-950 text-base font-bold leading-none
          shadow-sm 
          transition-colors 
          file:border-0 file:bg-transparent file:text-sm file:font-medium 
          placeholder:text-muted-foreground 
          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus:border-indigo-400
          disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

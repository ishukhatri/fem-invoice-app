import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textVariants = cva(`text-gray-950`, {
  variants: {
    variant: {
      headingLarge: "text-4xl font-bold",
      headingMedium: " text-2xl font-bold",
      headingSmall: "text-base font-bold leading-normal",
      headingSmall2: "text-base font-bold leading-none",
      body1: "text-xs font-medium leading-none",
      body2: " text-xs font-medium leading-none",
    },
  },
  defaultVariants: {
    variant: "body1",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  text: string;
  className?: string; // Optional class name for additional styling
  // Add any other props you need
}

const Text: React.FC<TextProps> = ({ text, variant, className, ...props }) => {
  return (
    <span className={cn(textVariants({ variant, className }))} {...props}>
      {text}
    </span>
  );
};

export default Text;

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variants = "primary" | "secondary" | "ghost" | "outline" | "smallPriority";
type Size = "tiny" | "small" | "medium" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variants;
  size: Size;
  children: ReactNode;
  classCustom: string | "";
}

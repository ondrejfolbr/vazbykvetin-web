import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: "button" | "a";
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-deep-plum text-neutral-white hover:bg-deep-plum-90 border border-transparent",
  secondary:
    "bg-transparent text-deep-plum border border-deep-plum hover:bg-deep-plum-10",
  ghost:
    "bg-transparent text-deep-plum underline underline-offset-4 hover:bg-neutral-50 border border-transparent",
  accent:
    "bg-plum-50 text-neutral-white hover:bg-deep-plum-70 border border-transparent",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-body-sm",
  md: "h-11 px-6 text-body",
  lg: "h-13 px-8 text-body-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  as = "button",
  href,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center font-body font-medium rounded-sm",
    "transition-colors duration-300 ease-in-out",
    "cursor-pointer select-none",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (as === "a" && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

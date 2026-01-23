import styles from "./styles.module.css";
import type { ButtonProps } from "./types";

export const Button = ({
  classCustom,
  variant,
  size,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles[variant]} ${styles[size]} ${styles[classCustom]}`}
      {...props}
    >
      {children}
    </button>
  );
};

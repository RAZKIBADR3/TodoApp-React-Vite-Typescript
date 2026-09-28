import type { ButtonHTMLAttributes } from "react";

export type ButtonCardProps = {
  title: string,
  buttonType: ButtonHTMLAttributes<HTMLButtonElement>["type"] // "submit" | "reset" | "button" | undefined
};
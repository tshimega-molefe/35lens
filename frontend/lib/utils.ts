import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// ============== Tailwind ==============
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// ============== Error Handling ==============
export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong on the server";
  }

  return message;
};
// ============== Capitalize String ==============
export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

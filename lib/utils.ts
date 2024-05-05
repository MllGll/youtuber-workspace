import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string) {
  if (!name) return;

  const nameParts = name.split(" ");

  const firstName = nameParts[0];
  const lastName = nameParts[1];

  return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
}

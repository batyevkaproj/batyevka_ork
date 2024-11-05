import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn (...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function inserSpaceInDecimal(number: any) {
  const numString = number.toString();
  const parts = numString.split(/(\d{3})(?=([^\d]|$))/g);
  return parts.join(" ").trim(); // Add .trim() to remove trailing space
}

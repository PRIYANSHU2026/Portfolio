import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export const EMAIL_SERVICE_ID = "service_id"; // Replace with your emailjs service ID
export const EMAIL_TEMPLATE_ID = "template_id"; // Replace with your emailjs template ID
export const EMAIL_PUBLIC_KEY = "public_key"; // Replace with your emailjs public key

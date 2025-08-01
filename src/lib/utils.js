import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
} 

export function createPageUrl(pageName) {
    return '/' + pageName.toLowerCase().replace(/ /g, '-');
}
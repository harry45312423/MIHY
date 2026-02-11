import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { UIMessage } from 'ai';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Extract text content from a UIMessage's parts array */
export function getMessageText(message: UIMessage): string {
  return message.parts
    .filter((part): part is Extract<typeof part, { type: 'text' }> => part.type === 'text')
    .map((part) => part.text)
    .join('');
}

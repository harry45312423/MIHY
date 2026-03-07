const MAX_INPUT_LENGTH = 2000;

const INJECTION_PATTERNS = [
  /ignore\s+(all\s+)?previous\s+instructions/i,
  /ignore\s+(all\s+)?above/i,
  /system\s*prompt/i,
  /you\s+are\s+now/i,
  /act\s+as\s+if/i,
  /pretend\s+(you|to\s+be)/i,
  /disregard\s+(all|previous)/i,
  /override\s+(your|the)\s+(instructions|rules)/i,
  /\[system\]/i,
  /\[INST\]/i,
];

export function sanitizeUserInput(input: string): string {
  let sanitized = input.trim();

  // Remove null bytes
  sanitized = sanitized.replace(/\0/g, '');

  // Limit length
  if (sanitized.length > MAX_INPUT_LENGTH) {
    sanitized = sanitized.substring(0, MAX_INPUT_LENGTH);
  }

  // Strip HTML tags
  sanitized = sanitized.replace(/<[^>]*>/g, '');

  // Normalize Unicode (NFC for Korean)
  sanitized = sanitized.normalize('NFC');

  return sanitized;
}

export function detectPromptInjection(input: string): boolean {
  return INJECTION_PATTERNS.some((pattern) => pattern.test(input));
}

export function sanitizeForDisplay(content: string): string {
  // Allow safe markdown but strip dangerous HTML
  return content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/javascript:/gi, '');
}

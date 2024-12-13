export const CACHE_DURATION = {
  ONE_DAY: 24 * 60 * 60 * 1000,
  ONE_YEAR: 365 * 24 * 60 * 60 * 1000,
} as const;

export const MIME_TYPES = {
  JS: "application/javascript",
  CSS: "text/css",
  HTML: "text/html",
} as const;

export const HEADERS = {
  CONTENT_TYPE: "Content-Type",
  CACHE_CONTROL: "Cache-Control",
  SECURITY: {
    NO_SNIFF: "X-Content-Type-Options",
  },
} as const;

export const MIME_TYPES = {
  JS: "application/javascript; charset=utf-8",
  CSS: "text/css; charset=utf-8",
  HTML: "text/html; charset=utf-8",
  JSON: "application/json; charset=utf-8",
  PLAIN: "text/plain; charset=utf-8",
  IMAGE: {
    PNG: "image/png",
    JPG: "image/jpeg",
    GIF: "image/gif",
    SVG: "image/svg+xml",
    ICO: "image/x-icon",
  },
} as const;

export const HEADERS = {
  CONTENT_TYPE: "Content-Type",
  CACHE_CONTROL: "Cache-Control",
  SECURITY: {
    NO_SNIFF: "X-Content-Type-Options",
  },
} as const;

export const CACHE_CONTROL = {
  NO_CACHE: "no-cache, no-store, must-revalidate",
  PUBLIC_LONG: "public, max-age=31536000",
} as const;

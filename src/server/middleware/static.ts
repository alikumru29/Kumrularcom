import express, { Response } from "express";
import { ExpressMiddleware } from "../types/express.js";
import { paths } from "../config/paths.js";
import { MIME_TYPES, HEADERS } from "../config/constants.js";

const setMimeType: ExpressMiddleware = (req, res, next) => {
  const ext = req.path.split(".").pop()?.toLowerCase();

  switch (ext) {
    case "js":
    case "mjs":
      res.type(MIME_TYPES.JS);
      break;
    case "css":
      res.type(MIME_TYPES.CSS);
      break;
    case "html":
      res.type(MIME_TYPES.HTML);
      break;
  }

  next();
};

const setStaticHeaders = (res: Response, path: string) => {
  // Set appropriate MIME type based on file extension
  if (path.endsWith(".js") || path.endsWith(".mjs")) {
    res.setHeader(HEADERS.CONTENT_TYPE, MIME_TYPES.JS);
  } else if (path.endsWith(".css")) {
    res.setHeader(HEADERS.CONTENT_TYPE, MIME_TYPES.CSS);
  }

  // Set caching headers
  if (path.includes("/assets/")) {
    res.setHeader(HEADERS.CACHE_CONTROL, "public, max-age=31536000");
  } else {
    res.setHeader(HEADERS.CACHE_CONTROL, "no-cache, no-store, must-revalidate");
  }
};

// Create static middleware with options
const staticFiles = express.static(paths.client.dist, {
  index: false,
  etag: true,
  lastModified: true,
  maxAge: "1y",
  setHeaders: setStaticHeaders,
});

export const staticMiddleware = [setMimeType, staticFiles];

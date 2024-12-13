// src/server/middleware/static.ts
import express, { Response } from "express";
import { ExpressMiddleware } from "../types/express.js";
import { paths } from "../config/paths.js";
import { MIME_TYPES, HEADERS } from "../config/constants.js";

const setMimeType: ExpressMiddleware = (_req, res, next) => {
  res.setHeader(HEADERS.CONTENT_TYPE, MIME_TYPES.JS);
  next();
};

const setStaticHeaders = (res: Response, path: string) => {
  if (path.endsWith(".js") || path.endsWith(".mjs")) {
    res.setHeader(HEADERS.CONTENT_TYPE, MIME_TYPES.JS);
  }
  res.setHeader(HEADERS.CACHE_CONTROL, "public, max-age=31536000");
};

const staticFiles = express.static(paths.client.dist, {
  index: false,
  etag: true,
  lastModified: true,
  maxAge: "1y",
  setHeaders: setStaticHeaders,
});

export const staticMiddleware = [setMimeType, staticFiles];

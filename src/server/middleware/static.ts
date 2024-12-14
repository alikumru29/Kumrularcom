import express from "express";
import { ExpressMiddleware } from "../types/express.js";
import { MIME_TYPES, HEADERS, CACHE_CONTROL } from "../config/constants.js";
import { getClientDistPath } from "../utils/path.js";

const setMimeType: ExpressMiddleware = (req, res, next) => {
  const ext = req.path.split(".").pop()?.toLowerCase();

  if (!ext) {
    next();
    return;
  }

  switch (ext) {
    case "js":
    case "mjs":
      res.setHeader(HEADERS.CONTENT_TYPE, MIME_TYPES.JS);
      break;
    case "css":
      res.setHeader(HEADERS.CONTENT_TYPE, MIME_TYPES.CSS);
      break;
    case "html":
      res.setHeader(HEADERS.CONTENT_TYPE, MIME_TYPES.HTML);
      break;
    case "json":
      res.setHeader(HEADERS.CONTENT_TYPE, MIME_TYPES.JSON);
      break;
    case "png":
      res.setHeader(HEADERS.CONTENT_TYPE, MIME_TYPES.IMAGE.PNG);
      break;
    case "jpg":
    case "jpeg":
      res.setHeader(HEADERS.CONTENT_TYPE, MIME_TYPES.IMAGE.JPG);
      break;
    case "gif":
      res.setHeader(HEADERS.CONTENT_TYPE, MIME_TYPES.IMAGE.GIF);
      break;
    case "svg":
      res.setHeader(HEADERS.CONTENT_TYPE, MIME_TYPES.IMAGE.SVG);
      break;
    case "ico":
      res.setHeader(HEADERS.CONTENT_TYPE, MIME_TYPES.IMAGE.ICO);
      break;
    default:
      res.setHeader(HEADERS.CONTENT_TYPE, MIME_TYPES.PLAIN);
  }

  next();
};

const setStaticHeaders = (res: express.Response, path: string) => {
  res.setHeader(HEADERS.SECURITY.NO_SNIFF, "nosniff");

  if (path.includes("/assets/")) {
    res.setHeader(HEADERS.CACHE_CONTROL, CACHE_CONTROL.PUBLIC_LONG);
  } else {
    res.setHeader(HEADERS.CACHE_CONTROL, CACHE_CONTROL.NO_CACHE);
  }
};

// Create static middleware with options
const staticFiles = express.static(getClientDistPath(), {
  index: false,
  etag: true,
  lastModified: true,
  maxAge: "1y",
  setHeaders: setStaticHeaders,
});

export const staticMiddleware = [setMimeType, staticFiles];

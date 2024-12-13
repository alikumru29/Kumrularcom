import express, { Response } from "express";
import { ExpressMiddleware } from "../types/express.js";
import { paths } from "../config/paths.js";

const setMimeType: ExpressMiddleware = (req, res, next) => {
  const ext = req.path.split(".").pop()?.toLowerCase();
  if (ext === "js" || ext === "mjs") {
    res.type("application/javascript");
  } else if (ext === "css") {
    res.type("text/css");
  }
  next();
};

const setStaticHeaders = (res: Response, path: string) => {
  if (path.endsWith(".js") || path.endsWith(".mjs")) {
    res.setHeader("Content-Type", "application/javascript");
  }
  res.setHeader("Cache-Control", "public, max-age=31536000");
};

const staticFiles = express.static(paths.client.dist, {
  index: false,
  etag: true,
  lastModified: true,
  maxAge: "1y",
  setHeaders: setStaticHeaders,
});

export const staticMiddleware = [setMimeType, staticFiles];

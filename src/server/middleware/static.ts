import express from "express";
import { paths } from "../config/paths.js";

export const staticMiddleware = [
  // Serve main static files
  express.static(paths.client.dist),

  // Serve assets specifically
  express.static(paths.client.assets, {
    setHeaders: (res) => {
      res.setHeader("Cache-Control", "public, max-age=31536000"); // 1 year
    },
  }),
];

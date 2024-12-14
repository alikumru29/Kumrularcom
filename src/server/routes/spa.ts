import { Router } from "express";
import { paths } from "../config/paths.js";
import { MIME_TYPES, HEADERS, CACHE_CONTROL } from "../config/constants.js";

const router = Router();

// Serve index.html for all routes
router.get("*", (_req, res) => {
  res.set({
    [HEADERS.CONTENT_TYPE]: MIME_TYPES.HTML,
    [HEADERS.CACHE_CONTROL]: CACHE_CONTROL.NO_CACHE,
    [HEADERS.SECURITY.NO_SNIFF]: "nosniff",
  });

  res.sendFile(paths.client.index, { root: paths.root });
});

export const spaRoutes = router;

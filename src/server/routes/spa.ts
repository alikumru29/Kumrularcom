import { Router } from "express";
import { paths } from "../config/paths.js";

const router = Router();

router.get("*", (_req, res) => {
  res.sendFile(paths.client.index);
});

export const spaRoutes = router;

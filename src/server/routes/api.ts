import { Router } from "express";
import { getProducts } from "../controllers/productController.js";
import { HEADERS } from "../config/constants.js";

const router = Router();

// API middleware to set proper headers
router.use((_req, res, next) => {
  res.setHeader(HEADERS.CONTENT_TYPE, "application/json; charset=utf-8");
  res.setHeader("X-Powered-By", "Kumrular API");
  next();
});

router.get("/products", getProducts);

export const apiRoutes = router;

import { Router } from "express";
import { getProducts } from "../controllers/productController.js";

const router = Router();

// Her API isteği için JSON başlığını ayarla
router.use((_req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

router.get("/products", getProducts);

export const apiRoutes = router;

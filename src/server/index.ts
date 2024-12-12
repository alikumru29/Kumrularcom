import express from "express";
import cors from "cors";
import path from "path";
import { ProductService } from "./services/productService.js";
import { getProducts } from "./controllers/productController.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the client build directory
app.use(express.static(path.join(process.cwd(), "dist/client")));

// API endpoints
app.get("/api/products", getProducts);

// Serve index.html for all other routes (SPA)
app.get("*", (_req, res) => {
  res.sendFile(path.join(process.cwd(), "dist/client/index.html"));
});

// Start server and initialize data
async function startServer() {
  try {
    // Initialize ProductService and fetch initial data
    const productService = ProductService.getInstance();
    await productService.fetchProducts();
    console.log("Initial product cache created successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    // Schedule updates every 24 hours
    setInterval(async () => {
      try {
        console.log("Running scheduled product update...");
        await productService.fetchProducts();
        console.log("Products cache updated successfully");
      } catch (error) {
        console.error("Error updating products cache:", error);
      }
    }, 24 * 60 * 60 * 1000);
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer().catch(console.error);

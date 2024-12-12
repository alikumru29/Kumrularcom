import express from "express";
import cors from "cors";
import { ProductService } from "./services/productService";
import { getProducts } from "./controllers/productController";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// API endpoints
app.get("/api/products", getProducts);

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

import { ProductService } from "./productService.js";

const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

export async function startProductUpdateScheduler() {
  const productService = ProductService.getInstance();

  // Initial fetch
  try {
    await productService.fetchProducts();
    console.log("Initial product cache created successfully");
  } catch (error) {
    console.error("Error creating initial product cache:", error);
    throw error;
  }

  // Schedule updates
  setInterval(async () => {
    try {
      console.log("Running scheduled product update...");
      await productService.fetchProducts();
      console.log("Products cache updated successfully");
    } catch (error) {
      console.error("Error updating products cache:", error);
    }
  }, TWENTY_FOUR_HOURS);
}

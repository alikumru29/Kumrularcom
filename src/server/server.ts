import express from 'express';
import cors from 'cors';
import { getProducts } from './productController';

const app = express();
const PORT = process.env.PORT || 3000;

export function startServer() {
  app.use(cors());
  app.use(express.json());

  // Products endpoint
  app.get('/api/products', getProducts);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
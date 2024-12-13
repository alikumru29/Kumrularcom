import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const paths = {
  root: join(__dirname, "../../.."),
  client: {
    dist: join(__dirname, "../../../dist/client"),
    assets: join(__dirname, "../../../dist/client/assets"),
    images: join(__dirname, "../../../dist/client/assets/images"),
    index: join(__dirname, "../../../dist/client/index.html"),
  },
  server: {
    dist: join(__dirname, "../../../dist/server"),
    cache: join(__dirname, "../../../dist/server/cache"),
  },
} as const;

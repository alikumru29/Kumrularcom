import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get root directory
const rootDir = join(__dirname, "../../..");

export const paths = {
  root: rootDir,
  client: {
    dist: join(rootDir, "dist/client"),
    assets: join(rootDir, "dist/client/assets"),
    index: join(rootDir, "dist/client/index.html"),
  },
  server: {
    dist: join(rootDir, "dist/server"),
    cache: join(rootDir, "dist/server/cache"),
    logs: join(rootDir, "logs"),
  },
} as const;

import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const paths = {
  root: join(__dirname, "../../.."),
  client: {
    dist: join(__dirname, "../../../dist/client"),
    index: join(__dirname, "../../../dist/client/index.html"),
  },
} as const;

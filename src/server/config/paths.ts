import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get root directory based on environment
const getRootDir = () => {
  if (process.env.NODE_ENV === "production") {
    return (
      process.env.PASSENGER_APP_ROOT || "/var/www/vhosts/kumrular.com/httpdocs"
    );
  }
  return join(__dirname, "../../..");
};

const rootDir = getRootDir();

export const paths = {
  root: rootDir,
  client: {
    dist: join(rootDir, "dist/client"),
    assets: join(rootDir, "dist/client/assets"),
    images: join(rootDir, "dist/client/assets/images"),
    index: join(rootDir, "dist/client/index.html"),
  },
  server: {
    dist: join(rootDir, "dist/server"),
    cache: join(rootDir, "dist/server/cache"),
    logs: join(rootDir, "logs"),
  },
} as const;

import { fileURLToPath } from "url";
import { dirname, join } from "path";

export function getAbsolutePath(
  importMetaUrl: string,
  ...paths: string[]
): string {
  const __filename = fileURLToPath(importMetaUrl);
  const __dirname = dirname(__filename);
  return join(__dirname, ...paths);
}

export function getClientDistPath(): string {
  return getAbsolutePath(import.meta.url, "../../../dist/client");
}

export function getIndexHtmlPath(): string {
  return getAbsolutePath(import.meta.url, "../../../dist/client/index.html");
}

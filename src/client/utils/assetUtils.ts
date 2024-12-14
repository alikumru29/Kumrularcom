export function getAssetPath(path: string): string {
  // For development, use the direct path
  if (import.meta.env.DEV) {
    return `/src/assets/${path}`;
  }

  // For production, use the hashed path
  const fileName = path.split("/").pop();
  // Remove file extension to match Vite's hashing pattern
  const baseName = fileName?.split(".").slice(0, -1).join(".");
  return `/assets/images/${baseName}`;
}

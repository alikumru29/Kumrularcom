export function getAssetPath(path: string): string {
  // For development, use the direct path
  if (import.meta.env.DEV) {
    return `/src/assets/${path}`;
  }

  // For production, use the correct assets path
  return `/assets/images/${path.split("/").pop()}`;
}

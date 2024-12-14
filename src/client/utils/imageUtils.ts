// Image handling utilities
export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  const target = e.target as HTMLImageElement;
  target.onerror = null; // Prevent infinite loop
  target.src = "https://via.placeholder.com/400x400?text=Görsel+Yok";
};

export const getImagePlaceholder = (
  width: number,
  height: number,
  text = "Görsel Yok"
) => {
  return `https://via.placeholder.com/${width}x${height}?text=${encodeURIComponent(
    text
  )}`;
};

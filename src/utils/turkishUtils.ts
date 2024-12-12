// Utility function to convert Turkish characters to ASCII and create SEO-friendly slugs
export function turkishToAscii(text: string): string {
  const turkishChars: { [key: string]: string } = {
    ı: "i",
    İ: "I",
    ş: "s",
    Ş: "S",
    ğ: "g",
    Ğ: "G",
    ü: "u",
    Ü: "U",
    ö: "o",
    Ö: "O",
    ç: "c",
    Ç: "C",
  };

  return text
    .replace(/[ıİşŞğĞüÜöÖçÇ]/g, (char) => turkishChars[char] || char)
    .replace(/[^a-zA-Z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .toLowerCase()
    .trim();
}

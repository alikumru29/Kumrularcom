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
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase()
    .trim();
}

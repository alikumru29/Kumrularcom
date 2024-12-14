export const styles = {
  container: "container mx-auto px-4 sm:px-6 lg:px-8",

  gradientText:
    "bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent",

  card: {
    base: "bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg",
    hover: "group-hover:scale-105 transition-transform duration-300",
  },

  button: {
    primary:
      "bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors",
    secondary:
      "bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors",
  },

  section: {
    padding: "py-16 md:py-24",
    gradient: "bg-gradient-to-br from-slate-50 to-slate-100",
  },

  heading: {
    h1: "text-4xl md:text-5xl lg:text-6xl font-bold",
    h2: "text-3xl md:text-4xl lg:text-5xl font-bold",
    h3: "text-2xl md:text-3xl lg:text-4xl font-bold",
  },
};

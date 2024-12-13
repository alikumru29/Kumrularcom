export const env = {
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
  publicPath: process.env.NODE_ENV === "production" ? "/dist/client" : "/",
} as const;

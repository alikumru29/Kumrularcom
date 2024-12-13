import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().default("4000"),
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  PUBLIC_PATH: z.string().default("/"),
});

const validateEnv = () => {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error(
      "❌ Invalid environment variables:",
      parsed.error.flatten().fieldErrors
    );
    return envSchema.parse({});
  }

  return parsed.data;
};

const validatedEnv = validateEnv();

export const env = {
  port: parseInt(validatedEnv.PORT, 10),
  nodeEnv: validatedEnv.NODE_ENV,
  isProduction: validatedEnv.NODE_ENV === "production",
  publicPath: validatedEnv.NODE_ENV === "production" ? "/dist/client" : "/",
} as const;

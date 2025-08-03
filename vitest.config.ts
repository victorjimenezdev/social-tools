import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
  resolve: {
    alias: {
      "@ads": path.resolve(__dirname, "packages/ad-manager"),
      "@lib": path.resolve(__dirname, "packages/lib"),
      "@ui": path.resolve(__dirname, "packages/ui"),
    },
  },
});

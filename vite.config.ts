import { defineConfig } from "vite";
import { config } from "@lovable.dev/vite-tanstack-config";

// We extract Lovable's built-in plugins and extend them safely
export default defineConfig({
  ...config,
  base: "/punithreddy/", // <-- Ensures your assets load correctly on GitHub Pages
  build: {
    outDir: "dist", // <-- Forces the output back to 'dist' for compatibility
  }
});

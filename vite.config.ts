import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (development, production, etc.)
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: '/apresenta-o/',
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      tailwindcss(),
    ],

    resolve: {
      alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
    },

    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/test/setup.ts",
    },
  };
});

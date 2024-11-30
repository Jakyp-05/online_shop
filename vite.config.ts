import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@admin': path.resolve(__dirname, '/src/admin'),
      '@api': path.resolve(__dirname, '/src/api'),
      '@client': path.resolve(__dirname, '/src/client'),
      '@hooks': path.resolve(__dirname, '/src/hooks'),
      '@interface': path.resolve(__dirname, '/src/interface'),
      '@shared': path.resolve(__dirname, '/src/shared'),
      '@store': path.resolve(__dirname, '/src/store'),
    },
  },
});

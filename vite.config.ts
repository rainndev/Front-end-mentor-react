import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Front-end-mentor-react/",
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
});

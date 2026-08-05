import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://repacss.org
// nsfcac.github.io/repacss
export default defineConfig({
  integrations: [react()],
  site: "https://repacss.org",
  // base: "/repacss",
  output: 'static',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
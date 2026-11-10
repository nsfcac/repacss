import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://repacss.org
// nsfcac.github.io/repacss
export default defineConfig({
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
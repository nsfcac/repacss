import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://repacss.org
// nsfcac.github.io/repacss
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://repacss.org",
  // base: "/repacss",
  output: 'static',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  }
});
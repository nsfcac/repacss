import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
// https://nsfcac.github.io/repacss
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://repacss.org",
  base: "/repacss",
  output: 'static',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  }
});
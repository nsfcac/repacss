import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
// https://repacss.org
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://nsfcac.github.io/repacss",
  base: "/repacss",
  output: 'static',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  }
});
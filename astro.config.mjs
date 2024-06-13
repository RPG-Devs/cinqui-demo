import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

export default defineConfig({
  site: "https://rpg-devs.github.io",
  // For local development, use the following:
  //base: "",
  // For production, use the following:
  base: "/cinqui-demo"
  integrations: [tailwind(), svelte()]
});
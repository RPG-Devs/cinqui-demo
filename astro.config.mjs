import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

export default defineConfig({
  site: "https://rpg-devs.github.io",
  base: process.env.BASE_URL  || "",
  integrations: [tailwind(), svelte()]
});
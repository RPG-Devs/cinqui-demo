import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://rpg-devs.github.io",
  base: "/cinqui-demo",
  integrations: [tailwind(), svelte()]
});
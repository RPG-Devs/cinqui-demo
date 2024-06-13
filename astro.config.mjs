import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

const localhost_url = "http://localhost:4321";
const github_url = "https://rpg-devs.github.io/cinqui-demo";

// https://astro.build/config
export default defineConfig({
  site: "https://rpg-devs.github.io/cinqui-demo",
  //base: process.env.BASE_URL  || "",
  //base: '/',
  integrations: [tailwind(), svelte()]
});
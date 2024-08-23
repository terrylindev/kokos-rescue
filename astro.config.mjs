import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";

const {
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");


// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: PUBLIC_SANITY_DATASET,
    useCdn: false,
    apiVersion: "2024-08-13",
    studioBasePath: "/studio",
  }), tailwind(), partytown(), react()],
  output: "static",
});
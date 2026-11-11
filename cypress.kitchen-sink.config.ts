import { defineConfig } from "cypress";

// Separate from cypress.config.ts so this demo does not start the Real World App
// and is not included in the default spec pattern.
export default defineConfig({
  e2e: {
    baseUrl: "https://example.cypress.io",
    specPattern: "cypress/demo/**/*.spec.ts",
    supportFile: false,
    video: false,
  },
});

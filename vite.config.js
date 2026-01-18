import staticAdapter from "@marko/run-adapter-static";
import marko from "@marko/run/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/markojs-todos-app/",
  plugins: [
    marko({
      adapter: staticAdapter(),
    }),
  ],
});

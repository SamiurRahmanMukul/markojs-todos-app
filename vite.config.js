import { defineConfig } from "vite";
import marko from "@marko/run/vite";
import staticAdapter from "@marko/run-adapter-static";

export default defineConfig({
  base: process.env.NODE_ENV === "production"
    ? "/markojs-todos-app/"
    : "/",
  plugins: [
    marko({
      adapter: staticAdapter(),
    }),
  ],
});

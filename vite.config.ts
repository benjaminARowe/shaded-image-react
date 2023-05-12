import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";
import * as packageJson from "./package.json";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ["src/component/"],
    }),
  ],
  build: {
    lib: {
      entry: resolve("src", "components/index.ts"),
      name: "ReactViteLibrary",
      formats: ["es", "umd"],
      fileName: (format) => `react-vite-library.${format}.js`,
    },
    rollupOptions: {
      external:
        packageJson.peerDependencies == null
          ? []
          : [...Object.keys(packageJson.peerDependencies)],
    },
  },
});

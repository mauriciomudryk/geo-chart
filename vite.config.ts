import { defineConfig } from "vite";
import postcss from "rollup-plugin-postcss";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "GeoChart",
      fileName: "geo-chart",
    },
    rollupOptions: {
      plugins: [
        postcss({
          inject: true,
          minimize: true,
        }),
      ],
    },
    minify: false, // <-- DESABILITA minificação
    sourcemap: true, // <-- gera source map para debugar
  },
});

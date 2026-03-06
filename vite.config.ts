import postcss from "rollup-plugin-postcss";
import { defineConfig } from "vite";

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
    minify: true, // <-- DESABILITA minificação
    sourcemap: false, // <-- gera source map para debugar
  },
});

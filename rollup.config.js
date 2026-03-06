import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/geochart.js",
    format: "umd",
    name: "GeoChart",
  },
  plugins: [
    postcss({
      inject: true,
      minimize: true,
    }),
  ],
};

import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // Entry point(s)
  format: ["cjs", "esm"], // Output formats: CommonJS and ES Modules
  dts: true, // Generate declaration files (.d.ts)
  sourcemap: true, // Generate source maps
  clean: true, // Clean the output directory before building
  outDir: "dist", // Output directory
});

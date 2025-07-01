import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true, // Generate TypeScript declaration files
  splitting: false,
  clean: true,
  sourcemap: false,
  minify: true
});
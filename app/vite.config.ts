import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      enums: path.resolve(__dirname, "src/enums"),
      services: path.resolve(__dirname, "src/services"),
      ts: path.resolve(__dirname, "src/ts"),
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vono from "@vonojs/vono";
import { cloudflarePages } from "@vonojs/vono/adapters";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vono({ adapter: cloudflarePages() })],
});

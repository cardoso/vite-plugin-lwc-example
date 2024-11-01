import { defineConfig } from "vite";

import lwc from "vite-plugin-lwc";

// https://vitejs.dev/config
export default defineConfig({
	build: {
		copyPublicDir: true,
		assetsDir: "",
		rollupOptions: {
		  input: ["src/main.js"],
		  output: {
			entryFileNames: "[name].js",
		  },
		},
	  },
	plugins: [
		lwc(),
	],
});

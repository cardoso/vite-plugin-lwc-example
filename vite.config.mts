import { defineConfig } from "vite";

import lwc from "vite-plugin-lwc";

// https://vitejs.dev/config
export default defineConfig({
	build: {
		copyPublicDir: true,
		assetsDir: "",
		rollupOptions: {
		  input: ["src/main.js"],
		  preserveEntrySignatures: "strict",
		  output: {
			entryFileNames: "[name].js",
			preserveModules: true,
		  },
		},
	  },
	plugins: [
		lwc(),
	],
});

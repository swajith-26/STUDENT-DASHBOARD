/* import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/STUDENT-DASHBOARD/",
  plugins: [react()],
}); */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.NETLIFY ? "/" : "/STUDENT-DASHBOARD/",
});
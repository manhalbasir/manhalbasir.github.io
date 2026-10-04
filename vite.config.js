import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// BASE_PATH يُضبط تلقائيًا في GitHub Actions: /اسم-المستودع/
export default defineConfig({ plugins: [react()], base: process.env.BASE_PATH || "/" });

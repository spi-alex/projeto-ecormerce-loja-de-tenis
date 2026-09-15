import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/projeto-ecormerce-loja-de-tenis/", // Altere aqui se o seu repositório tiver outro nome
});

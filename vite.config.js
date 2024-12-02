import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";// import dotenv package for hiding environmental variables
// run package config
dotenv.config();
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //define process env
});

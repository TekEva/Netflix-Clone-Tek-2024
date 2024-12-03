import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv'; // Import dotenv for environment variables

// Load environment variables
dotenv.config();

export default defineConfig({
  plugins: [react()],
  base: '/Netflix-Clone-Tek-2024/', // Set to your repository name for deployment
  build: {
    outDir: 'dist', // Ensure output goes to 'dist'
  },
});


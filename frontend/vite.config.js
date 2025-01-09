import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const PORT = process.env.PORT || 5002;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

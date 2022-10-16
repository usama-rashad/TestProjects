import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const SERVER_PORT = 3000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:
  {
    port : SERVER_PORT,
    //https: true
  }
  
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Ye block file changes ko turant detect karne mein madad karega
    watch: {
      usePolling: true,
    },
    // Agar HMR disconnect hota hai toh ye use reconnect karne ki koshish karega
    hmr: {
      overlay: true,
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate', // Atualiza automaticamente
      manifest: {
        name: 'Finxi - Gerenciador Financeiro',
        short_name: 'Finxi',
        theme_color: '#0F2A3D',
        background_color: '#FFFFFF',
        display: 'standalone',
        icons:[
          {
            src: "/icons/icon-32x32.png",
            sizes: "32x32",
            type: "image/png"

            
          },
          {
            src: "/icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "/icons/icon-64x64.png",
            sizes: "64x64",
            type: "image/png"
          },
          {
            src: "/icons/icon-92x92.png",
            sizes: "92x92",
            type: "image/png"
          },
          {
            src: "/icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png"
          },
          {
            src: "/icons/icon-196x196.png",
            sizes: "196x196",
            type: "image/png"
          },
          {
            src: "/icons/icon-258x258.png",
            sizes: "258x258",
            type: "image/png"
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/icons/icon-1024x1024.png",
            sizes: "1024x1024",
            type: "image/png"
          },

        ],
      },
    }),
  ],
});
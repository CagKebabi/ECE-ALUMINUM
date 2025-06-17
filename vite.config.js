import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
    server: {
        host: true, // Tüm IP adreslerinden erişime izin ver
        port: 5173, // Varsayılan port
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env),
        https: false
    },
    build: {
      outDir: './dist',
      emptyOutDir: true,
      sourcemap: true,
      assetsInlineLimit: 0, // Tüm asset'leri dışa aktar
      rollupOptions: {
          input: {
              main: resolve(__dirname, 'index.html'),
              about: resolve(__dirname, 'src/pages/about.html'),
              kisBahcesi: resolve(__dirname, 'src/pages/kis-bahcesi.html'),
              surmeCam: resolve(__dirname, 'src/pages/surme-cam-sistemleri.html'),
          },
          output: {
              assetFileNames: (assetInfo) => {
                  if (/\.(mp4|webm|ogg|mp3|wav|flac|aac|glb|gltf|fbx|mind)$/i.test(assetInfo.name)) {
                      return `assets/[name][extname]`;
                  }
                  const info = assetInfo.name.split('.');
                  const extType = info[info.length - 1];
                  return `assets/${extType}/[name]-[hash][extname]`;
              },
              chunkFileNames: 'js/[name]-[hash].js',
              entryFileNames: 'js/[name]-[hash].js',
          }
      }
  },
  plugins: [
    tailwindcss(),
  ],
})
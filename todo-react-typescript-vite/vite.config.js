import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import macrosPlugin from 'vite-plugin-babel-macros';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      port: 5020
    },
    plugins: [react(), macrosPlugin()],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      rollupOptions: {
        output: [
          {
            name: 'public',
            dir: './dist/public'
          }
        ]
      }
    }
  };
});

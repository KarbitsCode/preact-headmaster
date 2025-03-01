import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

export default defineConfig({
  plugins: [
    preact(),
    dts()
  ],
  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PreactHeadmaster',
      fileName: (format) => `preact-headmaster.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies || {})],
      output: {
        globals: {
          preact: 'preact'
        }
      }
    }
  }
});

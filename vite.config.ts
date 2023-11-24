import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            name: 'notu-react',
            entry: './src/index.ts'
        }
    },
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            outDir: './dist/types',
            exclude: '*/**/*.test.ts'
        })
    ],
    esbuild: {
        minifyIdentifiers: false
    }
});
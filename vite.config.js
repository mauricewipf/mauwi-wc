/** @type {import('vite').UserConfig} */
import {defineConfig} from "vite";

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
    if (command === 'serve') {
        return {
            // dev specific config
        }
    } else {
        // command === 'build'
        return {
            // build specific config
            root: '',
            build: {
                outDir: './dist',
                rollupOptions: {
                    input: 'src/index.ts',
                    output: {
                        entryFileNames: `[name].js`,
                        chunkFileNames: `[name].js`,
                        assetFileNames: `[name].[ext]`
                    }
                }
            }
        }
    }
})
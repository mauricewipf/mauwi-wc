/** @type {import('vite').UserConfig} */
import {defineConfig} from "vite";

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
    const temp = process.env;
    console.log('process.env ', process.env );
    if (command === 'serve') {
        return {
            // dev specific config
        }
    } else {
        // command === 'build'
        return {
            // build specific config
            root: 'src',
            build: {
                outDir: './dist2',
                emptyOutDir: true,
                rollupOptions: {
                    output: {
                        entryFileNames: `assets/[name].js`,
                        chunkFileNames: `assets/[name].js`,
                        assetFileNames: `assets/[name].[ext]`
                    }
                }
            }
        }
    }
})
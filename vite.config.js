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
                    input: {
                        'index': 'src/index.ts',
                        'map-overlay': 'src/map-overlay/index.ts',
                        'mega-flyout': 'src/mega-flyout/index.ts',
                        'multi-page-form': 'src/multi-page-form/multi-page-form.ts',
                        'quote-cards': 'src/quote-cards/quote-cards.ts',
                    },
                    output: {
                        entryFileNames: `entry-[name].js`,
                        chunkFileNames: `[name].js`,
                        assetFileNames: `[name].[ext]`
                    }
                }
            }
        }
    }
})
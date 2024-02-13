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
                        'accordion': 'src/accordion/index.ts',
                        'bar-chart': 'src/bar-chart/index.ts',
                        'calendar': 'src/calendar/index.ts',
                        'carousel': 'src/carousel/index.ts',
                        'carsharing-availability': 'src/carsharing-availability/index.ts',
                        'combobox': 'src/combobox/index.ts',
                        'data-table': 'src/data-table/index.ts',
                        'datepicker': 'src/datepicker/index.ts',
                        'dialog': 'src/dialog/index.ts',
                        'map-overlay': 'src/map-overlay/index.ts',
                        'mega-flyout': 'src/mega-flyout/index.ts',
                        'multi-page-form': 'src/multi-page-form/index.ts',
                        'personal-information-form': 'src/personal-information-form/index.ts',
                        'quote-cards': 'src/quote-cards/index.ts',
                        'tabs': 'src/tabs/index.ts',
                        // Add -> 'template': 'src/template/index.ts'
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
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        Components({
            resolvers: [PrimeVueResolver()]
        }),
    ],
    // resolve: {
    //     alias: {
    //         '@': resolve(__dirname, 'resources/js')
    //     },
    // },
    server: {
        watch: {
            usePolling: true,
        },
        hmr: {
            // host: 'localhost',
            overlay: false,
        },
    },
});

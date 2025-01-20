import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src',
            '@components': '/src/components',
            '@api': '/src/api',
            '@store': '/src/redux',
            '@pages': '/src/pages',
            '@theme': '/src/theme',
            '@constants': '/src/constants',
            '@assets': '/src/assets',
            '@filterIcons': '/src/assets/filterIcons',

        },
    },
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/scss/utils/variables.scss";
          @import "src/scss/utils/mixins.scss";
        `
      }
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
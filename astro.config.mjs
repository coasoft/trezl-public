// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: 'https://coasoft.github.io/trezl-public',
  vite: {
    plugins: [tailwindcss()]
  }
});
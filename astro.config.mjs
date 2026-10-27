// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// User site: https://caiohandradelima.github.io/
const site = 'https://caiohandradelima.github.io';

export default defineConfig({
	site,
	base: '/',
	vite: {
		plugins: [tailwindcss()],
	},
});

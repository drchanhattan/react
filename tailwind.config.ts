import type { Config } from 'tailwindcss';

const config: Config = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mat-black': '#0F172A',
        'mat-blue': '#0055FF',
        'mat-cream': '#E6D3BE',
        'mat-gray': '#4D4D4D',
        'mat-green': '#54DF0E',
        'mat-red': '#BA1A1A',
        'mat-white': '#FDFCFF',
        'mat-yellow': '#FFC107',
        'neutral-black': '#171C22',
        'neutral-white': '#F8F9FF',
      },
      fontFamily: {
        inter: ['Inter', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;

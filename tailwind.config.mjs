/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#2B1D17',
        moka: '#4A342A',
        caramel: '#8A5A3B',
        creme: '#F4EDE2',
        ivoire: '#FBF7F0',
        sauge: '#8C9A7B',
        or: '#C99A4B',
        o1: '#E0B96A',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      fontWeight: {
        600: '600',
        700: '700',
      },
    },
  },
  plugins: [],
};

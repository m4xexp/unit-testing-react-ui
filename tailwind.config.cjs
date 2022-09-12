/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-primary': 'var(--color-primary)',
      },
      backgroundColor: {
        'background-primary': 'var(--background-primary)',
      },
      screens: {
        sss: '320px',
        ss: '360px',
        sm: '640px', // tablet
        md: '768px',
        lg: '1024px', // laptop
        xl: '1280px', // desktop
        '2xl': '1536px', // full desktop
      },
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
};

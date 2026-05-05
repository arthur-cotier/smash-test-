/* eslint-disable */
// Tailwind config — chargé après cdn.tailwindcss.com
window.tailwind = window.tailwind || {};
tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream:     '#fef9ef',
        charcoal:  '#171413',
        smash:     '#dc2626',
        smashDark: '#991b1b',
        mustard:   '#f59e0b',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        accent:  ['"Permanent Marker"', 'cursive'],
      },
    },
  },
};

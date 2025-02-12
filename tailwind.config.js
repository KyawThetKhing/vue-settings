/**
 * NOTE: tailwind
 * tailwind css version 4 has problem to init tailwind config file
 * ref: https://www.reddit.com/r/reactjs/comments/1i8mz7h/facing_issues_in_installing_tailwind_css/?rdt=37247
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

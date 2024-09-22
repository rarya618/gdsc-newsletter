/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'google-blue': '#4285F4',
        'google-green': '#109D58',
        'google-yellow': '#FABC05',
        'google-red': '#E94436'
      },
      keyframes: {
        appear: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        animation: {
          appear: "appear 1s ease-in-out 0.25s 1",
        }
      }
    },
  },
  plugins: [],
}


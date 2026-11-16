/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070D1F',
          900: '#0B132B',
          850: '#131D38',
          800: '#1C2541',
          700: '#2A3B5C',
          600: '#3A506B',
          500: '#516E94',
          400: '#7B93B3',
          300: '#A4B8D1',
          200: '#D0DCEB',
          100: '#EBF1F8',
          50: '#F4F7FB',
        },
        primary: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(11, 19, 43, 0.08), 0 2px 6px -1px rgba(11, 19, 43, 0.04)',
        'card-hover': '0 20px 30px -4px rgba(11, 19, 43, 0.12), 0 8px 16px -4px rgba(11, 19, 43, 0.08)',
        'elevated': '0 25px 50px -12px rgba(11, 19, 43, 0.25)',
      }
    },
  },
  plugins: [],
}

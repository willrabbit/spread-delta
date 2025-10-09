/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-green-100',
    'border-green-300',
    'text-green-700',
    'bg-red-100',
    'border-red-300',
    'text-red-700',
    'bg-yellow-100',
    'border-yellow-300',
    'text-yellow-700',
    'bg-blue-100',
    'border-blue-300',
    'text-blue-700',
    'bg-gray-100',
    'border-gray-300',
    'text-gray-700',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

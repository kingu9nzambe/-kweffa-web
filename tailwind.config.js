/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'void-black': '#050505',
                'deep-space': '#0a0a0e',
                'regime-gold': '#C6A87C',
                'gold-dim': '#8a7350',
                'spirit-purple': '#1a0b2e',
                'leaf-green': '#1A3C2A',
                'bone-white': '#e5e5e5',
                'smoke-gray': '#888888',
            },
            fontFamily: {
                'cinzel': ['Cinzel', 'serif'],
                'cormorant': ['Cormorant Garamond', 'serif'],
                'inter': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

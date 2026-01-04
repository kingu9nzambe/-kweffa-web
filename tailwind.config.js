/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'void-black': '#030303', // Darker, richer black
                'deep-space': '#08080C', // Slightly blue-tinted void
                'regime-gold': '#D4AF37', // True Metallic Gold
                'gold-dim': '#8a7350',
                'gold-light': '#F4E4BC', // Highlight gold
                'spirit-purple': '#1a0b2e',
                'leaf-green': '#1A3C2A',
                'bone-white': '#F5F5F0', // Warm white
                'smoke-gray': '#A0A0A0',
                'glass-black': 'rgba(5, 5, 5, 0.7)', // Glassmorphism base
            },
            fontFamily: {
                'cinzel': ['Cinzel', 'serif'],
                'cormorant': ['Cormorant Garamond', 'serif'],
                'inter': ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'noise': "url('/noise.png')", // We will ensure this exists or use CSS gradient noise
                'void-gradient': 'radial-gradient(circle at center, #0a0a0e 0%, #000000 100%)',
                'gold-gradient': 'linear-gradient(135deg, #C6A87C 0%, #F4E4BC 50%, #8a7350 100%)',
            },
            animation: {
                'slow-spin': 'spin 20s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' },
                }
            },
            boxShadow: {
                'glow-gold': '0 0 20px rgba(198, 168, 124, 0.3)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            },
        },
    },
    plugins: [],
}

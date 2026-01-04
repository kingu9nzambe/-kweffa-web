import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-void-black flex items-center justify-center">
            {/* Background Ambience */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />
                <img
                    src="/bg-smoke.png"
                    alt="Smoke Atmosphere"
                    className="w-full h-full object-cover opacity-30 scale-110"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black opacity-60"></div>
            </div>

            {/* Main Content */}
            <motion.div
                style={{ y: y1, opacity }}
                className="relative z-20 text-center flex flex-col items-center px-4 w-full max-w-7xl mx-auto"
            >
                {/* Pre-title */}
                <motion.div
                    initial={{ opacity: 0, letterSpacing: "1em", y: -20 }}
                    animate={{ opacity: 1, letterSpacing: "0.3em", y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <h2 className="text-regime-gold/80 uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-inter font-light">
                        The Ngyanuba Nation Presents
                    </h2>
                </motion.div>

                {/* Main Title - Massive Cinematic */}
                <div className="relative">
                    <motion.h1
                        initial={{ scale: 0.9, opacity: 0, filter: "blur(20px)" }}
                        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        className="text-6xl md:text-8xl lg:text-[10rem] font-bold font-cinzel text-white leading-[0.85] tracking-tighter"
                    >
                        <span className="block hover:text-transparent hover:bg-clip-text hover:bg-white/90 transition-all duration-500 cursor-default">
                            NGOMBONGOLA
                        </span>
                    </motion.h1>

                    {/* Subtitle / Second Line - Metallic Gold */}
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-5xl md:text-7xl lg:text-[8rem] font-bold font-cinzel leading-none tracking-tighter mt-2"
                    >
                        <span className="text-transparent bg-clip-text bg-gold-gradient animate-shimmer bg-[length:200%_auto]">
                            REGIME
                        </span>
                    </motion.h1>
                </div>

                {/* Descriptive Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="mt-12 flex flex-col items-center gap-8"
                >
                    <p className="max-w-xl text-gray-200 font-light text-lg md:text-xl tracking-wide leading-relaxed">
                        Where the map older than time is revealed.<br />
                        <span className="text-white drop-shadow-glow-gold">Custodians of the Bantu Truth.</span>
                    </p>

                    {/* Scroll Indicator Line */}
                    <div className="h-24 w-[1px] bg-gradient-to-b from-regime-gold via-regime-gold/20 to-transparent animate-pulse-slow"></div>
                </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute bottom-10 left-10 hidden md:block z-20">
                <p className="text-xs text-regime-gold font-mono tracking-widest vertical-rl">
                    EST. BEFORE TIME
                </p>
            </div>
            <div className="absolute bottom-10 right-10 hidden md:block z-20">
                <p className="text-xs text-gray-500 font-mono tracking-widest">
                    SCROLL TO ENTER
                </p>
            </div>
        </div>
    );
};

export default Hero;

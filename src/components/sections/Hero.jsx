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
                className="relative z-20 text-center flex flex-col items-center px-4"
            >
                <motion.div
                    initial={{ opacity: 0, letterSpacing: "1em" }}
                    animate={{ opacity: 1, letterSpacing: "0.2em" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    <h2 className="text-regime-gold uppercase tracking-[0.5em] text-sm md:text-xl mb-4 font-cinzel">
                        The Ngyanuba Nation Presents
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ y: 100, opacity: 0, filter: "blur(20px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold font-cinzel text-white leading-none tracking-tighter mix-blend-difference"
                >
                    NGOMBONGOLA
                    <br />
                    <span className="text-stroke-gold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 block mt-2">REGIME</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-12 flex flex-col items-center gap-6"
                >
                    <p className="max-w-md text-gray-400 font-light text-lg tracking-wide">
                        Where the map older than time is revealed.
                        <br />
                        <span className="text-regime-gold">Custodians of the Bantu Truth.</span>
                    </p>

                    <div className="h-16 w-[1px] bg-gradient-to-b from-regime-gold to-transparent animate-pulse"></div>
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

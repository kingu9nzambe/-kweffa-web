import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Philosophy = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.3, 1, 0.3]);
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.3, 1, 0.3]);
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.7, 1], [0.3, 1, 0.3]);

    const principles = [
        {
            number: "01",
            title: "Royal Ancestry",
            desc: "We are not descendants of slaves, but of Kings and Queens. The Bantu spirit flows through our veins, regal and unbroken.",
            opacity: opacity1
        },
        {
            number: "02",
            title: "Decolonized Mind",
            desc: "Strip away the layers of colonial thought. Reveal the raw, creative power that has always existed within the African consciousness.",
            opacity: opacity2
        },
        {
            number: "03",
            title: "Obeah Power",
            desc: "Harness the spiritual energy of the universe. Manifest art, music, and truth through the ancient wisdom of our ancestors.",
            opacity: opacity3
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="philosophy"
            className="min-h-[150vh] py-32 relative overflow-hidden bg-void-black"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-void-black via-deep-space to-void-black pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-32 sticky top-32"
                >
                    <h2 className="text-5xl md:text-7xl font-cinzel font-black tracking-tighter mb-8 text-white">
                        Our <span className="text-regime-gold">Philosophy</span>
                    </h2>
                    <div className="w-24 h-[2px] bg-regime-gold mx-auto shadow-[0_0_15px_rgba(198,168,124,0.5)]" />
                </motion.div>

                <div className="flex flex-col gap-40 mt-32">
                    {principles.map((principle, idx) => (
                        <motion.div
                            key={idx}
                            style={{ opacity: principle.opacity }}
                            className="py-12 border-l border-spirit-purple/20 pl-8 md:pl-16 max-w-4xl mx-auto w-full transition-all duration-500"
                        >
                            <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'} text-left md:text-left`}>
                                <motion.div
                                    className="text-sm font-mono text-regime-gold mb-6 tracking-[0.3em] font-bold"
                                >
                                    {principle.number}
                                </motion.div>
                                <motion.h3
                                    className={`text-4xl md:text-6xl font-black font-cinzel mb-8 text-transparent bg-clip-text bg-gradient-to-r ${idx % 2 === 0 ? 'from-white to-gray-500' : 'from-gray-500 to-white'
                                        }`}
                                >
                                    {principle.title}
                                </motion.h3>
                                <motion.p
                                    className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl"
                                >
                                    {principle.desc}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;

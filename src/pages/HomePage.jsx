import React from 'react';
import Hero from '../components/sections/Hero';
import Philosophy from '../components/sections/Philosophy';
import Media from '../components/sections/Media';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-void-black selection:bg-regime-gold selection:text-black"
        >
            <div id="home">
                <Hero />
            </div>

            <div className="relative z-10 bg-void-black">
                <div id="philosophy" className="py-24 relative">
                    {/* Ambient Glow */}
                    <div className="absolute top-1/2 left-0 w-1/3 h-full bg-spirit-purple/5 blur-[120px] pointer-events-none" />
                    <Philosophy />
                </div>

                {/* Featured Services - BENTO GRID */}
                <section className="py-32 px-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-deep-space opacity-50" />

                    {/* Decorative Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

                    <div className="container mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-4xl md:text-7xl font-cinzel text-white mb-6">
                                The <span className="text-transparent bg-clip-text bg-gold-gradient">Offerings</span>
                            </h2>
                            <p className="text-white/80 font-light tracking-wide max-w-2xl mx-auto">
                                Ancient pathways for the modern spirit. Choose your vector of ascension.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {/* Card 1: Large - Consultations */}
                            <Link to="/services" className="col-span-1 md:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl bg-glass-black border border-white/5 hover:border-regime-gold/50 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-regime-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="p-10 h-full flex flex-col justify-between relative z-10">
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <span className="text-xs font-mono text-regime-gold tracking-widest border border-regime-gold/30 px-3 py-1 rounded-full">01</span>
                                            <ArrowUpRight className="text-gray-500 group-hover:text-regime-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                        </div>
                                        <h3 className="text-4xl font-cinzel text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">Divination</h3>
                                        <p className="text-gray-200 font-light leading-relaxed max-w-sm group-hover:text-white transition-colors">
                                            Access the timeless wisdom of the Bantu ancestors. Unveil the map of your destiny through sacred reading.
                                        </p>
                                    </div>
                                    <div className="h-64 w-full bg-void-black/50 rounded-2xl mt-8 overflow-hidden border border-white/5 group-hover:border-regime-gold/20 transition-colors">
                                        {/* Placeholder for noise/texture image */}
                                        <div className="w-full h-full bg-noise opacity-20 mix-blend-overlay hover:scale-110 transition-transform duration-1000" />
                                    </div>
                                </div>
                            </Link>

                            {/* Card 2: Vertical - Healing */}
                            <Link to="/services" className="col-span-1 md:col-span-1 row-span-2 group relative overflow-hidden rounded-3xl bg-glass-black border border-white/5 hover:border-regime-gold/50 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-b from-leaf-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="p-8 h-full flex flex-col relative z-10">
                                    <div className="flex justify-between items-start mb-auto">
                                        <span className="text-xs font-mono text-leaf-green tracking-widest border border-leaf-green/30 px-3 py-1 rounded-full">02</span>
                                        <ArrowUpRight className="text-gray-500 group-hover:text-leaf-green transition-colors" />
                                    </div>
                                    <div className="mt-8">
                                        <h3 className="text-3xl font-cinzel text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">Healing</h3>
                                        <p className="text-gray-200 text-sm font-light mb-8">
                                            Restore harmony with Kindoki spiritual practices.
                                        </p>
                                        <div className="w-full h-32 bg-leaf-green/10 rounded-xl relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Card 3: Small - Initiations */}
                            <Link to="/services" className="col-span-1 md:col-span-1 group relative overflow-hidden rounded-3xl bg-glass-black border border-white/5 hover:border-regime-gold/50 transition-all duration-500 min-h-[250px]">
                                <div className="absolute inset-0 bg-gradient-to-tr from-spirit-purple/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="p-8 h-full flex flex-col justify-between relative z-10">
                                    <h3 className="text-2xl font-cinzel text-white group-hover:text-regime-gold transition-colors">Initiations</h3>
                                    <div className="flex justify-end">
                                        <span className="text-xs text-white/70 group-hover:text-white transition-colors uppercase tracking-widest">Step In</span>
                                    </div>
                                </div>
                            </Link>

                            {/* Card 4: Small - Contact/More */}
                            <Link to="/contact" className="col-span-1 md:col-span-1 group relative overflow-hidden rounded-3xl bg-regime-gold/10 border border-regime-gold/30 hover:bg-regime-gold hover:border-regime-gold transition-all duration-500 flex flex-col justify-center items-center text-center p-8">
                                <h3 className="text-xl font-cinzel text-regime-gold group-hover:text-black mb-2 transition-colors">Start Your Journey</h3>
                                <ArrowUpRight className="text-regime-gold group-hover:text-black group-hover:scale-125 transition-all duration-300" />
                            </Link>
                        </div>
                    </div>
                </section>

                <div id="media" className="py-20 relative">
                    {/* Divider Line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                    <div className="container mx-auto px-6 mb-16">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-cinzel text-white text-center"
                        >
                            Sacred <span className="text-regime-gold italic">Transmissions</span>
                        </motion.h2>
                    </div>
                    <Media />
                </div>
            </div>
        </motion.div>
    );
};

export default HomePage;

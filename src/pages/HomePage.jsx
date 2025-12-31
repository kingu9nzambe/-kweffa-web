import React from 'react';
import Hero from '../components/sections/Hero';
import Philosophy from '../components/sections/Philosophy';
import Media from '../components/sections/Media';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-void-black"
        >
            <div id="home">
                <Hero />
            </div>

            <div className="relative z-10 bg-void-black">
                <div id="philosophy" className="py-20">
                    <Philosophy />
                </div>

                {/* Featured Services Teaser */}
                <section className="py-24 px-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-deep-space opacity-50"></div>
                    <div className="container mx-auto relative z-10 text-center">
                        <h2 className="text-4xl md:text-6xl font-cinzel text-white mb-16">
                            Our <span className="text-regime-gold">Offerings</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {/* Placeholder Cards */}
                            <Link to="/services" className="group p-8 border border-white/10 hover:border-regime-gold bg-white/5 transition-all duration-500 hover:-translate-y-2">
                                <h3 className="text-2xl font-cinzel mb-4 group-hover:text-regime-gold">Consultations</h3>
                                <p className="text-gray-400">Unlock the path of your destiny through ancient divination.</p>
                            </Link>
                            <Link to="/services" className="group p-8 border border-white/10 hover:border-regime-gold bg-white/5 transition-all duration-500 hover:-translate-y-2">
                                <h3 className="text-2xl font-cinzel mb-4 group-hover:text-regime-gold">Healing</h3>
                                <p className="text-gray-400">Restore harmony with Bantu Kindoki spiritual practices.</p>
                            </Link>
                            <Link to="/services" className="group p-8 border border-white/10 hover:border-regime-gold bg-white/5 transition-all duration-500 hover:-translate-y-2">
                                <h3 className="text-2xl font-cinzel mb-4 group-hover:text-regime-gold">Initiations</h3>
                                <p className="text-gray-400">Step into the Regime. Become a custodian of truth.</p>
                            </Link>
                        </div>
                        <Link to="/services" className="inline-block px-8 py-4 border border-regime-gold text-regime-gold hover:bg-regime-gold hover:text-black transition-all duration-300 font-bold tracking-widest uppercase text-sm">
                            View All Services
                        </Link>
                    </div>
                </section>

                <div id="media" className="py-20">
                    <div className="container mx-auto px-6 mb-12">
                        <h2 className="text-4xl md:text-5xl font-cinzel text-white text-center">
                            Sacred <span className="text-regime-gold">Transmissions</span>
                        </h2>
                    </div>
                    <Media />
                </div>
            </div>
        </motion.div>
    );
};

export default HomePage;

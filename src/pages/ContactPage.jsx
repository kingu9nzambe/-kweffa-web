import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <div className="pt-32 min-h-screen bg-void-black text-white px-6 pb-20 flex items-center justify-center selection:bg-regime-gold selection:text-black">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    className="relative bg-white/5 border border-white/10 p-8 md:p-16 rounded-2xl backdrop-blur-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Decorative Border */}
                    <div className="absolute inset-0 border border-regime-gold/20 rounded-2xl m-2 pointer-events-none" />

                    <div className="text-center mb-12">
                        <h2 className="text-regime-gold text-xs font-bold tracking-[0.4em] uppercase mb-4">Secure Channel</h2>
                        <h1 className="text-4xl md:text-6xl font-cinzel text-white">
                            Send a <span className="italic text-regime-gold">Transmission</span>
                        </h1>
                    </div>

                    <form className="space-y-8 max-w-2xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group">
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-regime-gold transition-colors">Identity</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/40 border-b border-white/20 p-4 focus:border-regime-gold outline-none transition-all duration-300 text-white placeholder-white/10 focus:bg-white/5"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="group">
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-regime-gold transition-colors">Coordinates</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/40 border-b border-white/20 p-4 focus:border-regime-gold outline-none transition-all duration-300 text-white placeholder-white/10 focus:bg-white/5"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-regime-gold transition-colors">Signal</label>
                            <textarea
                                className="w-full bg-black/40 border-b border-white/20 p-4 h-40 focus:border-regime-gold outline-none transition-all duration-300 text-white placeholder-white/10 resize-none focus:bg-white/5"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <div className="text-center pt-8">
                            <button className="px-12 py-4 bg-regime-gold text-black font-bold tracking-[0.2em] uppercase text-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(198,168,124,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                                Transmit
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;

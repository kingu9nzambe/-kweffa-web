import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <div className="pt-32 min-h-screen bg-black text-white px-6">
            <motion.h1
                className="text-6xl font-cinzel text-regime-gold mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Contact The Regime
            </motion.h1>
            <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 p-8 rounded-lg">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-cinzel mb-2">Name</label>
                        <input type="text" className="w-full bg-black/50 border border-white/20 p-3 rounded focus:border-regime-gold outline-none" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-cinzel mb-2">Email</label>
                        <input type="email" className="w-full bg-black/50 border border-white/20 p-3 rounded focus:border-regime-gold outline-none" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-cinzel mb-2">Message</label>
                        <textarea className="w-full bg-black/50 border border-white/20 p-3 rounded h-32 focus:border-regime-gold outline-none" placeholder="Your message..."></textarea>
                    </div>
                    <button className="w-full bg-regime-gold text-black font-bold py-3 hover:bg-white transition-colors">
                        Send Transmission
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;

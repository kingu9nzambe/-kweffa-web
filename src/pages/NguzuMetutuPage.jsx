import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Palette, Film, Lock } from 'lucide-react';

const subsections = [
    { id: 'arts', label: 'Arts', icon: <Palette size={20} /> },
    { id: 'books', label: 'Books', icon: <BookOpen size={20} /> },
    { id: 'docs', label: 'Documentaries', icon: <Film size={20} /> },
];

const NguzuMetutuPage = () => {
    const [activeTab, setActiveTab] = useState('arts');
    const { addToCart } = useCart();

    return (
        <div className="pt-32 min-h-screen bg-void-black text-bone-white px-6 pb-20 overflow-hidden relative">
            <div className="fixed inset-0 pointer-events-none noise-overlay"></div>

            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-regime-gold text-lg tracking-[0.5em] mb-4 uppercase">The Library of Power</h2>
                    <h1 className="text-5xl md:text-8xl font-black font-cinzel tracking-tighter mb-6">
                        NGUZU <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">METUTU</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-white/50 text-lg font-light leading-relaxed">
                        The repository of sacred knowledge. Explore the visual arts, written transmissions, and cinematic records of the Ngyanuba Nation.
                    </p>
                </motion.div>
            </div>

            {/* Navigation Tabs */}
            <div className="max-w-3xl mx-auto mb-16 relative z-10">
                <div className="flex justify-center border-b border-white/10">
                    {subsections.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 relative ${activeTab === tab.id ? 'text-regime-gold' : 'text-white/40 hover:text-white'
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-regime-gold"
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="max-w-7xl mx-auto relative z-10 min-h-[400px]">
                <AnimatePresence mode="wait">

                    {/* ARTS SECTION */}
                    {activeTab === 'arts' && (
                        <motion.div
                            key="arts"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-white/5 border border-white/10">
                                    <div className="absolute inset-0 flex items-center justify-center text-white/20 font-cinzel text-xl">
                                        Vision {item}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-2xl font-cinzel text-white mb-2">Sacred Geometry {item}</h3>
                                        <p className="text-regime-gold text-xs tracking-widest uppercase">Visual Transmission</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* BOOKS SECTION */}
                    {activeTab === 'books' && (
                        <motion.div
                            key="books"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-12"
                        >
                            <div className="glass-panel p-8 flex flex-col md:flex-row gap-8 items-center border-l-4 border-regime-gold">
                                <div className="w-full md:w-32 h-48 bg-white/5 border border-white/20 shadow-2xl flex flex-col items-center justify-center shrink-0 group hover:border-regime-gold/50 transition-colors">
                                    <BookOpen className="text-regime-gold mb-2" size={32} />
                                    <span className="text-[10px] font-cinzel text-regime-gold font-bold tracking-widest text-center">FORBIDDEN<br />TEXT</span>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-cinzel mb-2">The Obeah Woman's Rebellion</h3>
                                    <p className="text-regime-gold text-sm tracking-widest mb-4">PART 1: FORBIDDEN KNOWLEDGE</p>
                                    <p className="text-white/60 leading-relaxed mb-6">
                                        Part one of the edition series: Forbidden Knowledge and the Fall of a Bantu Kongo Empire. A primary text for the Ngyanuba Nation using the narrative of the past to reconstruct the future.
                                    </p>
                                    <button
                                        onClick={() => addToCart({ id: 'book-1', name: "The Obeah Woman's Rebellion", price: 20, type: 'product' })}
                                        className="px-6 py-3 bg-regime-gold text-black hover:bg-white transition-all text-xs font-bold uppercase tracking-widest"
                                    >
                                        Acquire Knowledge ($20)
                                    </button>
                                </div>
                            </div>

                            <div className="glass-panel p-8 flex flex-col md:flex-row gap-8 items-center border-l-4 border-spirit-purple/50">
                                <div className="w-full md:w-32 h-48 bg-spirit-purple/10 border border-white/10 flex flex-col items-center justify-center shrink-0">
                                    <span className="text-[10px] font-cinzel text-spirit-purple font-bold tracking-widest text-center">FREE<br />DOWNLOAD</span>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-cinzel mb-2">The Obeah Act</h3>
                                    <p className="text-spirit-purple text-sm tracking-widest mb-4">LEGISLATION & MANIFESTO</p>
                                    <p className="text-white/60 leading-relaxed mb-6">
                                        A foundational document for the movement. Understand the laws that govern the spirit and the rebellion against suppression.
                                    </p>
                                    <a
                                        href="/downloads/The Obeah Act.pdf"
                                        download
                                        className="inline-block px-6 py-3 border border-white/20 hover:bg-spirit-purple hover:text-white hover:border-spirit-purple transition-all text-xs font-bold uppercase tracking-widest"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </div>

                            <div className="glass-panel p-8 flex flex-col md:flex-row gap-8 items-center opacity-50">
                                <div className="w-32 h-48 bg-black border border-white/20 shadow-2xl flex items-center justify-center shrink-0">
                                    <BookOpen className="text-white/20" size={40} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-cinzel mb-2">The Map Older Than Time</h3>
                                    <p className="text-regime-gold text-sm tracking-widest mb-4">COMING SOON</p>
                                    <p className="text-white/60 leading-relaxed mb-6">
                                        The core philosophy of the Ngombongola Regime. Understanding the cartography of the spirit before the imposition of colonial time.
                                    </p>
                                </div>
                            </div>

                            <div className="glass-panel p-8 flex flex-col md:flex-row gap-8 items-center opacity-50">
                                <div className="w-32 h-48 bg-black border border-white/10 flex items-center justify-center shrink-0">
                                    <Lock className="text-white/10" size={40} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-cinzel mb-2">Decolonizing Creativity</h3>
                                    <div className="inline-block px-3 py-1 bg-white/10 text-[10px] font-bold uppercase tracking-widest mb-4">
                                        Coming Soon
                                    </div>
                                    <p className="text-white/40 leading-relaxed">
                                        A guide to unlearning the restrictions placed upon the creative spirit by modern structures.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* DOCUMENTARIES SECTION */}
                    {activeTab === 'docs' && (
                        <motion.div
                            key="docs"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 gap-12"
                        >
                            <div className="relative aspect-video bg-black border border-white/10 rounded-xl overflow-hidden group">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 p-6">
                                    <div className="px-4 py-2 bg-red-900/50 backdrop-blur-md border border-red-500/30 text-xs font-bold uppercase tracking-widest text-red-200">
                                        Official Documentary
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                                    <h3 className="text-4xl font-cinzel mb-2">Origins of the Regime</h3>
                                    <p className="text-white/60 max-w-2xl">
                                        A visual journey into the Bantu Kindoki traditions and the formation of the Ngyanuba Nation.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default NguzuMetutuPage;

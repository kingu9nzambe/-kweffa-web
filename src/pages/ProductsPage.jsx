import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Shield, Droplets, Leaf, Heart, Sun, ArrowRight, BookOpen } from 'lucide-react';
import { useCart } from '../context/CartContext';

const kalungaProducts = [
    {
        id: 'soap-abyssal',
        name: 'ABYSSAL PURITY',
        line: 'Kalunga Clean',
        price: 33.00,
        type: 'product',
        description: 'Washed in the cosmic waters of Kalunga. A deep spiritual detox soap that strips away heavy energies and restores the void within.',
        icon: <Droplets className="w-8 h-8 text-blue-400" />,
        color: 'from-blue-900/40 to-black',
        accent: 'border-blue-500/30'
    },
    {
        id: 'soap-ascension',
        name: 'REGIME ASCENSION',
        line: 'Kalunga Clean',
        price: 45.00,
        type: 'product',
        description: 'Infused with gold dust and command. Formulated for abundance, attraction, and establishing authority in your domain.',
        icon: <Star className="w-8 h-8 text-regime-gold" />,
        color: 'from-yellow-900/40 to-black',
        accent: 'border-regime-gold/30'
    },
    {
        id: 'soap-watchman',
        name: 'NIGHT WATCHMAN',
        line: 'Kalunga Clean',
        price: 40.00,
        type: 'product',
        description: 'The eyes that see in the dark. A protective barrier soap that wards off envy, hexes, and returns malice to its source.',
        icon: <Shield className="w-8 h-8 text-purple-500" />,
        color: 'from-purple-900/40 to-black',
        accent: 'border-purple-500/30'
    }
];

const cosmicProducts = [
    {
        id: 'herb-roots',
        name: 'ROOTS OF THE MOTHER',
        line: 'Daughter of the Cosmic Mothers',
        price: 25.00,
        type: 'product',
        description: 'A grounding herbal blend of ancient roots to reconnect with the maternal lineage and stabilize the spirit.',
        icon: <Leaf className="w-8 h-8 text-green-400" />,
        color: 'from-green-900/40 to-black',
        accent: 'border-green-500/30'
    },
    {
        id: 'oil-womb',
        name: 'COSMIC WOMB OIL',
        line: 'Daughter of the Cosmic Mothers',
        price: 45.00,
        type: 'product',
        description: 'Sacred anointing oil for womb healing, trauma release, and honoring the divine feminine creative force.',
        icon: <Heart className="w-8 h-8 text-pink-500" />,
        color: 'from-pink-900/40 to-black',
        accent: 'border-pink-500/30'
    },
    {
        id: 'tincture-vitality',
        name: 'VITALITY ESSENCE',
        line: 'Daughter of the Cosmic Mothers',
        price: 30.00,
        type: 'product',
        description: 'Restorative herbal drops distilled to align the body\'s natural rhythms with the cosmic pulse. Pure life force.',
        icon: <Sun className="w-8 h-8 text-orange-400" />,
        color: 'from-orange-900/40 to-black',
        accent: 'border-orange-500/30'
    }
];

const ProductCard = ({ product, index, addToCart }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative h-full"
    >
        {/* Card Container - Glass & Gold */}
        <div className="h-full bg-glass-black border border-white/10 rounded-sm overflow-hidden transition-all duration-500 group-hover:border-regime-gold/50 relative flex flex-col">

            {/* Image/Icon Area */}
            <div className={`relative h-64 bg-gradient-to-b ${product.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay"></div>

                {/* Icon Halo */}
                <div className={`w-32 h-32 rounded-full border border-white/10 flex items-center justify-center bg-black/40 backdrop-blur-md shadow-2xl group-hover:scale-110 transition-transform duration-700`}>
                    <div className="relative z-10">{product.icon}</div>
                    <div className={`absolute inset-0 rounded-full border ${product.accent} opacity-50 animate-pulse-slow`}></div>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-8 flex flex-col flex-grow relative">
                <div className="mb-4">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-regime-gold/80 uppercase block mb-2">
                        {product.line}
                    </span>
                    <h3 className="text-2xl font-cinzel font-bold text-white group-hover:text-regime-gold transition-colors duration-300">
                        {product.name}
                    </h3>
                </div>

                <p className="text-gray-300 font-light text-sm leading-relaxed mb-8 flex-grow">
                    {product.description}
                </p>

                <div className="mt-auto border-t border-white/5 pt-6 flex items-center justify-between">
                    <span className="text-2xl font-cormorant italic text-white/90">
                        ${product.price.toFixed(2)}
                    </span>

                    <button
                        onClick={() => addToCart(product)}
                        className="group/btn flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-regime-gold text-white hover:text-black text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 border border-white/10 hover:border-regime-gold"
                    >
                        Acquire <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    </motion.div>
);

const BookSection = ({ addToCart }) => (
    <div className="container mx-auto mb-32">
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
            <div>
                <h2 className="text-3xl font-cinzel text-white mb-2">Sacred Knowledge</h2>
                <p className="text-sm text-gray-400 font-mono tracking-widest">SERIES 003 • FORBIDDEN TEXTS</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* The Book */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-glass-black border border-regime-gold/20 p-8 rounded-sm flex flex-col md:flex-row gap-8 items-center"
            >
                <div className="w-full md:w-48 aspect-[3/4] bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center p-4 group-hover:border-regime-gold/50 transition-colors">
                    <BookOpen size={48} className="text-regime-gold mb-4 opacity-80" strokeWidth={1} />
                    <span className="text-xs font-cinzel text-regime-gold font-bold tracking-widest">FORBIDDEN TEXT</span>
                </div>
                <div className="flex-grow flex flex-col">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-regime-gold/80 uppercase mb-2">Primary Text</span>
                    <h3 className="text-2xl font-cinzel font-bold text-white mb-4">THE OBEAH WOMAN'S REBELLION PART 1</h3>
                    <p className="text-gray-400 text-sm font-light mb-6">Part one of the edition series: Forbidden Knowledge and the Fall of a Bantu Kongo Empire.</p>
                    <button
                        onClick={() => addToCart({ id: 'book-1', name: "The Obeah Woman's Rebellion", price: 20, type: 'product' })}
                        className="mt-auto self-start px-8 py-3 bg-regime-gold text-black text-xs font-bold tracking-widest uppercase hover:bg-white transition-all duration-300"
                    >
                        Acquire Knowledge
                    </button>
                </div>
            </motion.div>

            {/* The Obeah Act (Free) */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-spirit-purple/10 border border-white/5 p-8 rounded-sm flex flex-col md:flex-row gap-8 items-center"
            >
                <div className="w-48 aspect-[3/4] bg-regime-gold/5 border border-regime-gold/20 flex items-center justify-center text-center p-4">
                    <span className="text-[10px] font-cinzel text-white/50">FREE FOR SUBSCRIBERS</span>
                </div>
                <div className="flex-grow flex flex-col">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-spirit-purple uppercase mb-2">Member Artifact</span>
                    <h3 className="text-2xl font-cinzel font-bold text-white mb-4">THE OBEAH ACT</h3>
                    <p className="text-gray-400 text-sm font-light mb-6">A foundational document for the movement. Available for free download.</p>
                    <a
                        href="/downloads/The Obeah Act.pdf"
                        download
                        className="mt-auto self-start px-8 py-3 border border-white/20 text-white text-xs font-bold tracking-widest uppercase hover:bg-regime-gold hover:text-black transition-all duration-300"
                    >
                        Download PDF
                    </a>
                </div>
            </motion.div>
        </div>
    </div>
);

const ProductsPage = () => {
    const { addToCart } = useCart();

    return (
        <div className="pt-32 min-h-screen bg-void-black text-white px-6 pb-32">
            {/* Hero Section */}
            <div className="container mx-auto text-center mb-24 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative z-10"
                >
                    <h2 className="text-regime-gold text-xs font-bold tracking-[0.5em] uppercase mb-4">
                        Sacred Provisions
                    </h2>
                    <h1 className="text-6xl md:text-9xl font-black font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-8 tracking-tighter">
                        ARTIFACTS
                    </h1>
                    <p className="max-w-xl mx-auto text-gray-300 font-light text-lg tracking-wide">
                        Tools for ritual, healing, and command. <br />
                        <span className="text-regime-gold/80 text-sm uppercase tracking-widest mt-2 block">Handcrafted in the Regime</span>
                    </p>
                </motion.div>
            </div>

            {/* Book Section - HIGHLIGHTED FIRST */}
            <BookSection addToCart={addToCart} />

            {/* Kalunga Clean Collection */}
            <div className="container mx-auto mb-32 opacity-60">
                <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
                    <div>
                        <h2 className="text-3xl font-cinzel text-white mb-2">Kalunga Clean</h2>
                        <p className="text-sm text-regime-gold font-mono tracking-widest uppercase">Coming Soon to the Regime</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {kalungaProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} addToCart={addToCart} />
                    ))}
                </div>
            </div>

            {/* Cosmic Mothers Collection */}
            <div className="container mx-auto opacity-60">
                <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
                    <div>
                        <h2 className="text-3xl font-cinzel text-white mb-2">Daughter of the Cosmic Mothers</h2>
                        <p className="text-sm text-regime-gold font-mono tracking-widest uppercase">Coming Soon to the Regime</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cosmicProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index + 3} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;

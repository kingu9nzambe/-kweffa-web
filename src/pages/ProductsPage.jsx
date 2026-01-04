import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Shield, Droplets, Leaf, Heart, Sun } from 'lucide-react';
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
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="group relative h-full"
    >
        <div className={`h-full glass-panel p-1 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-opacity-50 border border-white/5`}>
            <div className={`relative h-full bg-gradient-to-b ${product.color} p-8 flex flex-col items-center text-center rounded-xl`}>

                <div className={`w-24 h-24 rounded-full border-2 ${product.accent} flex items-center justify-center mb-8 bg-black/50 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500`}>
                    {product.icon}
                </div>

                <div className="text-xs font-bold tracking-[0.3em] text-regime-gold/70 mb-2 uppercase break-words w-full">
                    {product.line}
                </div>

                <h3 className="text-2xl font-cinzel font-bold mb-4 leading-none">
                    {product.name}
                </h3>

                <p className="text-white/80 mb-8 font-light text-sm leading-relaxed flex-grow">
                    {product.description}
                </p>

                <div className="w-full mt-auto">
                    <div className="flex items-center justify-between mb-6 px-4">
                        <span className="text-2xl font-cormorant italic text-regime-gold">
                            ${product.price.toFixed(2)}
                        </span>
                        <div className="h-px bg-white/10 flex-grow mx-4"></div>
                    </div>

                    <button
                        onClick={() => addToCart(product)}
                        className="w-full py-4 bg-white/5 hover:bg-regime-gold hover:text-black border border-white/10 hover:border-regime-gold transition-all duration-300 font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(198,168,124,0.2)]"
                    >
                        <ShoppingBag size={16} />
                        Acquire
                    </button>
                </div>
            </div>
        </div>
    </motion.div>
);

const ProductsPage = () => {
    const { addToCart } = useCart();

    return (
        <div className="pt-32 min-h-screen bg-void-black text-bone-white px-6 pb-20 overflow-hidden">
            <div className="fixed inset-0 pointer-events-none noise-overlay"></div>

            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-regime-gold text-lg tracking-[0.5em] mb-4 uppercase">Sacred Provisions</h2>
                    <h1 className="text-6xl md:text-8xl font-black font-cinzel tracking-tighter mb-6">
                        ARTIFACTS
                    </h1>
                    <p className="max-w-2xl mx-auto text-white/80 text-lg font-light leading-relaxed">
                        Tools for ritual, healing, and command.
                    </p>
                </motion.div>
            </div>

            {/* Kalunga Clean Section */}
            <div className="max-w-7xl mx-auto mb-32 relative z-10">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-white/10 flex-grow"></div>
                    <h2 className="text-2xl font-cinzel text-regime-gold tracking-widest text-center">KALUNGA CLEAN</h2>
                    <div className="h-px bg-white/10 flex-grow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {kalungaProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} addToCart={addToCart} />
                    ))}
                </div>
            </div>

            {/* Daughter of Cosmic Mothers Section */}
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-white/10 flex-grow"></div>
                    <h2 className="text-2xl font-cinzel text-purple-300 tracking-widest text-center uppercase">Daughter of the Cosmic Mothers</h2>
                    <div className="h-px bg-white/10 flex-grow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cosmicProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index + 3} addToCart={addToCart} />
                    ))}
                </div>
            </div>

            {/* Bottom Note */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center mt-32 text-white/40 text-xs tracking-widest uppercase"
            >
                Handcrafted in Limited Batches within the Regime
            </motion.div>
        </div>
    );
};

export default ProductsPage;

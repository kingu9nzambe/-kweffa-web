import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { toggleCart, cartItems } = useCart();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
        { name: 'Music', path: '/music' },
        { name: 'Nguzu Metutu', path: '/nguzu-metutu' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-700 ease-out border-b ${scrolled
                    ? 'bg-glass-black/80 backdrop-blur-xl py-3 border-white/5 shadow-glass'
                    : 'bg-transparent py-6 border-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="relative z-50 group">
                    <span className="text-2xl md:text-3xl font-bold font-cinzel tracking-tighter text-white group-hover:text-regime-gold transition-colors duration-500">
                        NGOMBONGOLA
                    </span>
                    <span className="block text-[0.6rem] tracking-[0.4em] text-regime-gold/60 group-hover:tracking-[0.6em] transition-all duration-500">
                        REGIME
                    </span>
                    {/* Glowing orb behind logo */}
                    <div className="absolute -inset-4 bg-regime-gold/20 blur-2xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="relative group"
                        >
                            <span className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${location.pathname === link.path ? 'text-regime-gold' : 'text-white/70 group-hover:text-white'
                                }`}>
                                {link.name}
                            </span>

                            {/* Animated underline */}
                            <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[1px] bg-regime-gold transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                }`} />

                            {/* Hover glow */}
                            <span className="absolute inset-0 bg-regime-gold/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
                        </Link>
                    ))}

                    <button
                        onClick={toggleCart}
                        className="relative p-2 group hover:scale-110 transition-transform duration-300"
                    >
                        <ShoppingCart size={20} className="text-white group-hover:text-regime-gold transition-colors" />
                        {cartItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-regime-gold text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse-slow">
                                {cartItems.length}
                            </span>
                        )}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4 z-50">
                    <button
                        onClick={toggleCart}
                        className="p-2 hover:text-regime-gold transition-colors"
                    >
                        <ShoppingCart size={20} />
                        {cartItems.length > 0 && (
                            <span className="absolute top-4 right-14 bg-regime-gold text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                {cartItems.length}
                            </span>
                        )}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-regime-gold transition-colors">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 bg-black/90 z-40 flex items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-cinzel text-white hover:text-regime-gold transition-colors tracking-widest uppercase"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

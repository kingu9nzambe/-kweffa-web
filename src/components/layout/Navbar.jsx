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
        const handleScroll = () => setScrolled(window.scrollY > 50);
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
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-tighter z-50 relative group">
                    <span className="text-white group-hover:text-regime-gold transition-colors duration-300">NGOMBONGOLA</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm tracking-widest uppercase hover:text-regime-gold transition-colors relative group ${location.pathname === link.path ? 'text-regime-gold' : 'text-white/80'
                                }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 h-[1px] bg-regime-gold transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                }`} />
                        </Link>
                    ))}

                    <button
                        onClick={toggleCart}
                        className="relative p-2 hover:text-regime-gold transition-colors"
                    >
                        <ShoppingCart size={20} />
                        {cartItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-regime-gold text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
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
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-black z-40 flex items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8 text-2xl font-light">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="hover:text-regime-gold transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

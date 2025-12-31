import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartSidebar = () => {
    const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, getTotal } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        setIsCartOpen(false);
        navigate('/cart');
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0,0,0,0.7)',
                            zIndex: 1002
                        }}
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            width: 'min(400px, 100vw)',
                            height: '100vh',
                            background: 'var(--bg-void)',
                            borderLeft: '1px solid rgba(139, 92, 246, 0.3)',
                            zIndex: 1003,
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '25px',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <ShoppingCart size={24} color="var(--accent-gold)" />
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Cart</h2>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                style={{
                                    background: 'none',
                                    color: 'var(--text-primary)',
                                    padding: '5px'
                                }}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div style={{
                            flex: 1,
                            overflowY: 'auto',
                            padding: '20px'
                        }}>
                            {cartItems.length === 0 ? (
                                <div style={{
                                    textAlign: 'center',
                                    color: 'var(--text-muted)',
                                    marginTop: '50px'
                                }}>
                                    <ShoppingCart size={60} style={{ opacity: 0.3, marginBottom: '20px' }} />
                                    <p>Your cart is empty</p>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    {cartItems.map((item) => (
                                        <motion.div
                                            key={`${item.type}-${item.id}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            style={{
                                                display: 'flex',
                                                gap: '15px',
                                                padding: '15px',
                                                background: 'rgba(255,255,255,0.02)',
                                                border: '1px solid rgba(255,255,255,0.05)'
                                            }}
                                        >
                                            {/* Artwork */}
                                            <div style={{
                                                width: '60px',
                                                height: '60px',
                                                flexShrink: 0,
                                                background: item.artwork ? `url(${item.artwork})` : 'linear-gradient(135deg, #8b5cf6, #d4af37)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }} />

                                            {/* Info */}
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <div style={{
                                                    fontSize: '0.9rem',
                                                    fontWeight: 600,
                                                    marginBottom: '3px',
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis'
                                                }}>
                                                    {item.title}
                                                </div>
                                                <div style={{
                                                    fontSize: '0.75rem',
                                                    color: 'var(--text-muted)',
                                                    marginBottom: '5px'
                                                }}>
                                                    {item.artist} {item.album && `• ${item.album}`}
                                                </div>
                                                <div style={{
                                                    fontSize: '0.9rem',
                                                    color: 'var(--accent-gold)',
                                                    fontWeight: 600
                                                }}>
                                                    ${item.price}
                                                </div>
                                            </div>

                                            {/* Remove Button */}
                                            <button
                                                onClick={() => removeFromCart(item.id, item.type)}
                                                style={{
                                                    background: 'none',
                                                    color: 'var(--text-muted)',
                                                    padding: '5px'
                                                }}
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div style={{
                                padding: '25px',
                                borderTop: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '20px',
                                    fontSize: '1.2rem',
                                    fontWeight: 700
                                }}>
                                    <span>Total:</span>
                                    <span style={{ color: 'var(--accent-gold)' }}>${getTotal().toFixed(2)}</span>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleCheckout}
                                    style={{
                                        width: '100%',
                                        padding: '15px',
                                        background: 'var(--accent-gold)',
                                        color: '#000',
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        letterSpacing: '1px',
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    Checkout
                                </motion.button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;

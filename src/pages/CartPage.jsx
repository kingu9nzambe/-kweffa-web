import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { cartItems, getTotal, clearCart } = useCart();
    const [isPurchased, setIsPurchased] = useState(false);
    const [customPrice, setCustomPrice] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handlePurchase = (e) => {
        e.preventDefault();
        // Mock purchase flow
        setIsPurchased(true);

        // Simulate clearing cart after "purchase"
        setTimeout(() => {
            clearCart();
        }, 3000);
    };

    if (cartItems.length === 0 && !isPurchased) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                paddingTop: '80px',
                paddingBottom: '100px'
            }}>
                <Mail size={80} color="var(--text-muted)" style={{ opacity: 0.3, marginBottom: '30px' }} />
                <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Your cart is empty</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                    Browse the catalog and add some music!
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/browse')}
                    style={{
                        padding: '15px 40px',
                        background: 'var(--accent-gold)',
                        color: '#000',
                        fontWeight: 700,
                        fontSize: '1rem'
                    }}
                >
                    Browse Music
                </motion.button>
            </div>
        );
    }

    if (isPurchased) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '80px',
                paddingBottom: '100px'
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                        textAlign: 'center',
                        maxWidth: '600px',
                        padding: '60px 40px',
                        background: 'rgba(139, 92, 246, 0.05)',
                        border: '1px solid rgba(139, 92, 246, 0.2)'
                    }}
                >
                    <CheckCircle size={80} color="var(--accent-gold)" style={{ marginBottom: '30px' }} />
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 900 }}>
                        Purchase Complete!
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '40px' }}>
                        Thank you for supporting the Ngombongola Regime. You will receive a download link at {email}.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '15px 40px',
                            background: 'var(--accent-gold)',
                            color: '#000',
                            fontWeight: 700,
                            fontSize: '1rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '20px'
                        }}
                    >
                        <Download size={20} /> Download Now
                    </motion.button>

                    <div>
                        <button
                            onClick={() => navigate('/')}
                            style={{
                                background: 'none',
                                color: 'var(--accent-purple)',
                                textDecoration: 'underline',
                                fontSize: '0.9rem'
                            }}
                        >
                            Return to Home
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div style={{
            minHeight: '100vh',
            paddingTop: '120px',
            paddingBottom: '150px'
        }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        fontWeight: 900,
                        marginBottom: '20px',
                        fontFamily: 'var(--font-display)'
                    }}>
                        Checkout
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '60px' }}>
                        Complete your purchase and support independent music.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 400px',
                        gap: '40px'
                    }}>
                        {/* Order Summary */}
                        <div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '30px', fontWeight: 700 }}>
                                Order Summary
                            </h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {cartItems.map((item) => (
                                    <div
                                        key={`${item.type}-${item.id}`}
                                        style={{
                                            display: 'flex',
                                            gap: '20px',
                                            padding: '20px',
                                            background: 'rgba(255,255,255,0.02)',
                                            border: '1px solid rgba(255,255,255,0.05)'
                                        }}
                                    >
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            flexShrink: 0,
                                            background: item.artwork ? `url(${item.artwork})` : 'linear-gradient(135deg, #8b5cf6, #d4af37)',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }} />

                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '5px' }}>
                                                {item.title}
                                            </div>
                                            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                                                {item.artist} {item.album && `• ${item.album}`}
                                            </div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                                                {item.type}
                                            </div>
                                        </div>

                                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent-gold)' }}>
                                            ${item.price}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Checkout Form */}
                        <div>
                            <form onSubmit={handlePurchase} style={{
                                padding: '30px',
                                background: 'rgba(139, 92, 246, 0.05)',
                                border: '1px solid rgba(139, 92, 246, 0.2)',
                                position: 'sticky',
                                top: '100px'
                            }}>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '25px' }}>
                                    Payment Details
                                </h3>

                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            background: 'rgba(0,0,0,0.3)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            color: '#fff',
                                            fontSize: '1rem'
                                        }}
                                    />
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>
                                        Name Your Price (Optional)
                                    </label>
                                    <input
                                        type="number"
                                        min={getTotal()}
                                        step="0.01"
                                        value={customPrice}
                                        onChange={(e) => setCustomPrice(e.target.value)}
                                        placeholder={`Minimum: $${getTotal()}`}
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            background: 'rgba(0,0,0,0.3)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            color: '#fff',
                                            fontSize: '1rem'
                                        }}
                                    />
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                                        Support the artist by paying more than the minimum.
                                    </p>
                                </div>

                                <div style={{
                                    padding: '20px',
                                    background: 'rgba(0,0,0,0.3)',
                                    marginBottom: '25px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>Total:</span>
                                    <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent-gold)' }}>
                                        ${customPrice || getTotal().toFixed(2)}
                                    </span>
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        width: '100%',
                                        padding: '18px',
                                        background: 'var(--accent-gold)',
                                        color: '#000',
                                        fontWeight: 700,
                                        fontSize: '1.1rem',
                                        letterSpacing: '1px',
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    Complete Purchase
                                </motion.button>

                                <p style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--text-muted)',
                                    textAlign: 'center',
                                    marginTop: '15px',
                                    fontStyle: 'italic'
                                }}>
                                    This is a demo checkout. No real payment will be processed.
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Responsive */}
                    <style>{`
            @media (max-width: 968px) {
              ${CartPage.name} > div > div > div {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
                </motion.div>
            </div>
        </div>
    );
};

export default CartPage;

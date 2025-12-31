import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '120px 0',
            background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, var(--bg-void) 70%)',
            position: 'relative'
        }}>
            <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Mail size={60} color="var(--accent-gold)" style={{ marginBottom: '30px' }} />

                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        marginBottom: '30px',
                        fontWeight: 900,
                        letterSpacing: '-0.02em'
                    }}>
                        Join The Regime
                    </h2>

                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                        color: 'var(--text-muted)',
                        marginBottom: '60px',
                        lineHeight: 1.6,
                        maxWidth: '600px',
                        margin: '0 auto 60px'
                    }}>
                        Stay updated on the latest drops, teachings, and movements.
                        Become part of the decolonization revolution.
                    </p>

                    <form
                        style={{
                            display: 'flex',
                            gap: '15px',
                            maxWidth: '600px',
                            margin: '0 auto',
                            flexWrap: 'wrap'
                        }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="email"
                            placeholder="Your email address"
                            style={{
                                flex: '1 1 300px',
                                padding: '20px 25px',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#fff',
                                fontSize: '1rem',
                                outline: 'none',
                                fontFamily: 'var(--font-body)',
                                transition: 'all 0.3s'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-purple)'}
                            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                        />
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: 'var(--accent-gold)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '20px 40px',
                                background: 'var(--accent-purple)',
                                color: '#fff',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '0.9rem',
                                letterSpacing: '2px',
                                textTransform: 'uppercase'
                            }}
                        >
                            Join <Send size={18} />
                        </motion.button>
                    </form>

                    <p style={{
                        marginTop: '40px',
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        opacity: 0.6
                    }}>
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

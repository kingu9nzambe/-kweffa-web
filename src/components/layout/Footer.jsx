import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Music } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { Icon: Music, href: 'https://www.tiktok.com/@kweffa3', label: 'TikTok' },
        { Icon: Instagram, href: '#', label: 'Instagram' },
        { Icon: Youtube, href: '#', label: 'YouTube' },
    ];

    return (
        <footer style={{
            backgroundColor: 'var(--bg-void)',
            borderTop: '1px solid rgba(139, 92, 246, 0.2)',
            padding: '80px 0 40px',
            textAlign: 'center'
        }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        marginBottom: '20px',
                        fontWeight: 900,
                        letterSpacing: '2px',
                        fontFamily: 'var(--font-display)'
                    }}
                >
                    NGOMBONGOLA REGIME
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        color: 'var(--text-muted)',
                        marginBottom: '40px',
                        fontSize: '1rem',
                        letterSpacing: '1px'
                    }}
                >
                    Decolonizing Creativity. Restoring the Spirit.
                </motion.p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '25px',
                    marginBottom: '60px'
                }}>
                    {socialLinks.map(({ Icon, href, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                color: 'var(--accent-gold)',
                                padding: '15px',
                                border: '1px solid var(--accent-gold)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s'
                            }}
                        >
                            <Icon size={22} />
                        </motion.a>
                    ))}
                </div>

                <div style={{
                    paddingTop: '40px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)'
                }}>
                    <p>&copy; {new Date().getFullYear()} Kweffa3. All Rights Reserved.</p>
                    <p style={{ opacity: 0.6 }}>Built with purpose and power.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

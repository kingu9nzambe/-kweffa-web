import React from 'react';
import { motion } from 'framer-motion';
import { Play, Music2, ExternalLink } from 'lucide-react';

const Media = () => {
    // Real TikTok videos from @kweffa3
    const tiktokVideos = [
        {
            id: 1,
            url: "https://www.tiktok.com/@kweffa3/video/7543118677470629138",
            title: "N'Tole Kuefa - Lubolo People",
            caption: "N'Tole Kuefa mwana ya mboka ngya mbo'ngo 🐲",
            views: "37.6K",
            isPinned: true
        },
        {
            id: 2,
            url: "https://www.tiktok.com/@kweffa3/video/7468697778491821317",
            title: "Map Older Than Time",
            caption: "There exists a map older than time itself etched not on paper...",
            views: "12.6K",
            isPinned: true
        },
        {
            id: 3,
            url: "https://www.tiktok.com/@kweffa3/video/7443555966676667703",
            title: "Bantu Kindoki",
            caption: "Bantu Kindoki ☔️",
            views: "9.5K",
            isPinned: true
        },
        {
            id: 4,
            url: "https://www.tiktok.com/@kweffa3/video/7580510229939358983",
            title: "Being Myself",
            caption: "Being myself n if u can't handle that...",
            views: "5.9K"
        },
        {
            id: 5,
            url: "https://www.tiktok.com/@kweffa3/video/7589820412075232530",
            title: "Stages of Truth",
            caption: "Different stages of truth and development. #Kongoworld 🫆🐲",
            views: "129",
            isRecent: true
        }
    ];

    return (
        <section id="media" style={{
            minHeight: '100vh',
            padding: '120px 0',
            background: 'var(--bg-void)',
            position: 'relative'
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '80px' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        marginBottom: '20px',
                        fontWeight: 900
                    }}>
                        Media & Content
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
                        Explore the teachings, philosophy, and creative expressions from the Regime.
                    </p>
                </motion.div>

                {/* Featured Track */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(0,0,0,0.4) 100%)',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        padding: '50px',
                        marginBottom: '80px',
                        display: 'grid',
                        gridTemplateColumns: '200px 1fr',
                        gap: '40px',
                        alignItems: 'center'
                    }}
                >
                    <div style={{
                        width: '200px',
                        height: '200px',
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #d4af37 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                    }}>
                        <Music2 size={80} color="#000" strokeWidth={1.5} />
                    </div>

                    <div>
                        <h3 style={{
                            fontSize: 'clamp(1.8rem, 3vw, 3rem)',
                            marginBottom: '15px',
                            fontWeight: 900
                        }}>
                            Bantu Kindoki (Original Sound)
                        </h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '1.1rem' }}>
                            Original Sound - Kweffa3
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: 'var(--accent-gold)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--accent-gold)',
                                color: 'var(--accent-gold)',
                                padding: '15px 35px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                letterSpacing: '2px',
                                textTransform: 'uppercase'
                            }}
                        >
                            <Play size={18} fill="currentColor" /> Listen Now
                        </motion.button>
                    </div>
                </motion.div>

                {/* TikTok Videos Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '60px' }}
                >
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: 900,
                        marginBottom: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                    }}>
                        Latest from TikTok
                        <span style={{
                            fontSize: '0.8rem',
                            background: 'var(--accent-purple)',
                            padding: '5px 12px',
                            borderRadius: '20px',
                            fontWeight: 600
                        }}>
                            @kweffa3
                        </span>
                    </h3>
                </motion.div>

                {/* Video Grid - Real TikTok Videos */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '20px',
                    gridAutoRows: '250px'
                }}>
                    {tiktokVideos.map((video, idx) => (
                        <motion.a
                            key={video.id}
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            style={{
                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(0,0,0,0.8))',
                                border: '1px solid rgba(139, 92, 246, 0.3)',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                gridRow: idx === 0 ? 'span 2' : 'span 1',
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                        >
                            {/* Pinned Badge */}
                            {video.isPinned && (
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    background: 'var(--accent-gold)',
                                    color: '#000',
                                    padding: '5px 12px',
                                    fontSize: '0.7rem',
                                    fontWeight: 700,
                                    borderRadius: '3px',
                                    zIndex: 2,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    Pinned
                                </div>
                            )}

                            {/* Recent Badge */}
                            {video.isRecent && (
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    background: 'var(--accent-neon)',
                                    color: '#fff',
                                    padding: '5px 12px',
                                    fontSize: '0.7rem',
                                    fontWeight: 700,
                                    borderRadius: '3px',
                                    zIndex: 2,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    New
                                </div>
                            )}

                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 60%)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: '25px'
                            }}>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', fontWeight: 700 }}>
                                    {video.title}
                                </h4>
                                <p style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--text-muted)',
                                    marginBottom: '12px',
                                    lineHeight: 1.4,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical'
                                }}>
                                    {video.caption}
                                </p>
                                <div style={{
                                    display: 'flex',
                                    gap: '15px',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-muted)',
                                    alignItems: 'center'
                                }}>
                                    <span>{video.views} views</span>
                                    <ExternalLink size={14} />
                                </div>
                            </div>

                            <motion.div
                                whileHover={{ opacity: 1 }}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    opacity: 0,
                                    transition: 'opacity 0.3s'
                                }}
                            >
                                <div style={{
                                    background: 'var(--accent-gold)',
                                    borderRadius: '50%',
                                    width: '60px',
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Play size={30} fill="#000" color="#000" />
                                </div>
                            </motion.div>
                        </motion.a>
                    ))}
                </div>

                {/* TikTok CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{
                        marginTop: '80px',
                        textAlign: 'center',
                        padding: '60px',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        background: 'rgba(139, 92, 246, 0.03)'
                    }}
                >
                    <h3 style={{ fontSize: '2rem', marginBottom: '20px', fontWeight: 900 }}>
                        Follow the Movement
                    </h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '1.1rem' }}>
                        Join @kweffa3 on TikTok for daily teachings and content
                    </p>
                    <motion.a
                        href="https://www.tiktok.com/@kweffa3"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '18px 40px',
                            background: 'var(--accent-purple)',
                            color: '#fff',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            letterSpacing: '2px',
                            textTransform: 'uppercase'
                        }}
                    >
                        View on TikTok <ExternalLink size={18} />
                    </motion.a>
                </motion.div>
            </div>

            {/* Responsive Styles */}
            <style>{`
        @media (max-width: 768px) {
          section#media > div > div:nth-child(2) {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Media;

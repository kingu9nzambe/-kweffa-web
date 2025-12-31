import React from 'react';
import { albums } from '../data/albums';
import AlbumCard from '../components/music/AlbumCard';
import { motion } from 'framer-motion';

const BrowsePage = () => {
    return (
        <div style={{
            minHeight: '100vh',
            paddingTop: '120px',
            paddingBottom: '150px'
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginBottom: '60px' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        fontWeight: 900,
                        marginBottom: '20px',
                        fontFamily: 'var(--font-display)'
                    }}>
                        Browse Music
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-muted)',
                        maxWidth: '700px'
                    }}>
                        Explore the complete Ngombongola catalog. Stream for free or purchase to support the movement.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '30px'
                }}>
                    {albums.map((album, idx) => (
                        <motion.div
                            key={album.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <AlbumCard album={album} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrowsePage;

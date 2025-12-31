import React from 'react';
import { useParams } from 'react-router-dom';
import { getAlbumById } from '../data/albums';
import TrackList from '../components/music/TrackList';
import { motion } from 'framer-motion';
import { Play, ShoppingCart, Calendar, Music } from 'lucide-react';
import { useMusic } from '../context/MusicContext';
import { useCart } from '../context/CartContext';

const AlbumPage = () => {
    const { id } = useParams();
    const album = getAlbumById(id);
    const { playAlbum } = useMusic();
    const { addToCart } = useCart();

    if (!album) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p>Album not found</p>
            </div>
        );
    }

    const handlePlayAlbum = () => {
        playAlbum(album.tracks.map(track => ({
            ...track,
            album: album.title,
            artist: album.artist,
            artwork: album.artwork
        })));
    };

    const handleAddToCart = () => {
        addToCart({
            id: album.id,
            type: 'album',
            title: album.title,
            artist: album.artist,
            price: album.price,
            artwork: album.artwork
        });
    };

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
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(300px, 400px) 1fr',
                        gap: '60px',
                        marginBottom: '80px'
                    }}
                >
                    {/* Album Artwork */}
                    <div>
                        <div style={{
                            width: '100%',
                            aspectRatio: '1',
                            background: album.artwork ? `url(${album.artwork})` : 'linear-gradient(135deg, #8b5cf6, #d4af37)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            marginBottom: '30px',
                            boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)'
                        }} />

                        {/* Actions */}
                        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handlePlayAlbum}
                                style={{
                                    flex: 1,
                                    padding: '15px',
                                    background: 'var(--accent-gold)',
                                    color: '#000',
                                    fontWeight: 700,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    fontSize: '1rem'
                                }}
                            >
                                <Play size={20} fill="#000" /> Play Album
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleAddToCart}
                                style={{
                                    padding: '15px 20px',
                                    background: 'transparent',
                                    border: '1px solid var(--accent-purple)',
                                    color: 'var(--accent-purple)',
                                    fontWeight: 600
                                }}
                            >
                                <ShoppingCart size={20} />
                            </motion.button>
                        </div>

                        <div style={{
                            padding: '20px',
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 900,
                                color: 'var(--accent-gold)',
                                marginBottom: '10px'
                            }}>
                                ${album.price}
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                or name your price
                            </p>
                        </div>
                    </div>

                    {/* Album Info */}
                    <div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            fontWeight: 900,
                            marginBottom: '15px',
                            fontFamily: 'var(--font-display)',
                            lineHeight: 1.1
                        }}>
                            {album.title}
                        </h1>

                        <p style={{
                            fontSize: '1.3rem',
                            color: 'var(--text-muted)',
                            marginBottom: '30px',
                            fontWeight: 300
                        }}>
                            by {album.artist}
                        </p>

                        <div style={{
                            display: 'flex',
                            gap: '30px',
                            marginBottom: '40px',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Calendar size={18} color="var(--accent-purple)" />
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    Released {album.releaseDate}
                                </span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Music size={18} color="var(--accent-purple)" />
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    {album.tracks.length} tracks
                                </span>
                            </div>
                        </div>

                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: 1.8,
                            color: 'var(--text-secondary)',
                            marginBottom: '30px'
                        }}>
                            {album.description}
                        </p>

                        {album.credits && (
                            <div style={{
                                padding: '20px',
                                background: 'rgba(139, 92, 246, 0.05)',
                                border: '1px solid rgba(139, 92, 246, 0.1)',
                                fontSize: '0.9rem',
                                color: 'var(--text-muted)',
                                fontStyle: 'italic'
                            }}>
                                {album.credits}
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Track List */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: 900,
                        marginBottom: '30px'
                    }}>
                        Tracks
                    </h2>
                    <TrackList tracks={album.tracks} album={album} />
                </motion.div>
            </div>

            {/* Responsive Styles */}
            <style>{`
        @media (max-width: 768px) {
          ${AlbumPage.name} > div > div:first-child {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
        </div>
    );
};

export default AlbumPage;

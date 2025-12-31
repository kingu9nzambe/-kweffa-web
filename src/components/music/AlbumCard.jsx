import React from 'react';
import { motion } from 'framer-motion';
import { Play, ShoppingCart } from 'lucide-react';
import { useMusic } from '../../context/MusicContext';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const AlbumCard = ({ album }) => {
    const { playAlbum } = useMusic();
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handlePlayAlbum = (e) => {
        e.stopPropagation();
        playAlbum(album.tracks.map(track => ({
            ...track,
            album: album.title,
            artist: album.artist,
            artwork: album.artwork
        })));
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            onClick={() => navigate(`/album/${album.id}`)}
            style={{
                cursor: 'pointer',
                position: 'relative',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                padding: '15px',
                transition: 'all 0.3s'
            }}
        >
            {/* Album Artwork */}
            <div style={{
                width: '100%',
                aspectRatio: '1',
                background: album.artwork ? `url(${album.artwork})` : 'linear-gradient(135deg, #8b5cf6, #d4af37)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginBottom: '15px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Hover Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '15px'
                    }}
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handlePlayAlbum}
                        style={{
                            background: 'var(--accent-gold)',
                            color: '#000',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Play size={24} fill="#000" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleAddToCart}
                        style={{
                            background: 'var(--accent-purple)',
                            color: '#fff',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <ShoppingCart size={18} />
                    </motion.button>
                </motion.div>
            </div>

            {/* Album Info */}
            <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '5px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            }}>
                {album.title}
            </h3>
            <p style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                marginBottom: '10px'
            }}>
                {album.artist}
            </p>

            {/* Price */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <span style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--accent-gold)'
                }}>
                    ${album.price}
                </span>
                <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)'
                }}>
                    {album.tracks.length} tracks
                </span>
            </div>
        </motion.div>
    );
};

export default AlbumCard;

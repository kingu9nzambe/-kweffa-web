import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ShoppingCart } from 'lucide-react';
import { useMusic } from '../../context/MusicContext';
import { useCart } from '../../context/CartContext';

const TrackList = ({ tracks, album }) => {
    const { currentTrack, isPlaying, playTrack, playAlbum } = useMusic();
    const { addToCart } = useCart();

    const handlePlayTrack = (track, index) => {
        // Set queue to all tracks and play the selected one
        const enrichedTracks = tracks.map(t => ({
            ...t,
            album: album.title,
            artist: album.artist,
            artwork: album.artwork
        }));
        playAlbum(enrichedTracks);
        // Then play the specific track
        setTimeout(() => playTrack(enrichedTracks[index]), 100);
    };

    const handleAddTrackToCart = (track) => {
        addToCart({
            id: track.id,
            type: 'track',
            title: track.title,
            artist: album.artist,
            album: album.title,
            price: track.price,
            artwork: album.artwork
        });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {tracks.map((track, index) => {
                const isCurrentTrack = currentTrack?.id === track.id;
                const isCurrentPlaying = isCurrentTrack && isPlaying;

                return (
                    <motion.div
                        key={track.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ backgroundColor: 'rgba(139, 92, 246, 0.05)' }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '40px 1fr auto auto auto',
                            gap: '15px',
                            alignItems: 'center',
                            padding: '12px 15px',
                            borderBottom: '1px solid rgba(255,255,255,0.03)',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s',
                            backgroundColor: isCurrentTrack ? 'rgba(139, 92, 246, 0.1)' : 'transparent'
                        }}
                    >
                        {/* Play Button / Track Number */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handlePlayTrack(track, index)}
                            style={{
                                background: 'none',
                                color: isCurrentTrack ? 'var(--accent-gold)' : 'var(--text-muted)',
                                width: '30px',
                                height: '30px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.9rem',
                                fontWeight: 600
                            }}
                        >
                            {isCurrentPlaying ? (
                                <Pause size={16} fill="currentColor" />
                            ) : isCurrentTrack ? (
                                <Play size={16} fill="currentColor" />
                            ) : (
                                <span>{index + 1}</span>
                            )}
                        </motion.button>

                        {/* Track Title */}
                        <div>
                            <div style={{
                                fontSize: '0.95rem',
                                fontWeight: isCurrentTrack ? 600 : 400,
                                color: isCurrentTrack ? 'var(--accent-gold)' : 'var(--text-primary)'
                            }}>
                                {track.title}
                            </div>
                        </div>

                        {/* Duration */}
                        <div style={{
                            fontSize: '0.85rem',
                            color: 'var(--text-muted)',
                            minWidth: '50px',
                            textAlign: 'right'
                        }}>
                            {track.duration}
                        </div>

                        {/* Price */}
                        <div style={{
                            fontSize: '0.9rem',
                            color: 'var(--accent-gold)',
                            fontWeight: 600,
                            minWidth: '50px',
                            textAlign: 'right'
                        }}>
                            ${track.price}
                        </div>

                        {/* Add to Cart */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleAddTrackToCart(track);
                            }}
                            style={{
                                background: 'transparent',
                                border: '1px solid rgba(139, 92, 246, 0.3)',
                                color: 'var(--accent-purple)',
                                padding: '6px 10px',
                                fontSize: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px'
                            }}
                        >
                            <ShoppingCart size={14} />
                        </motion.button>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default TrackList;

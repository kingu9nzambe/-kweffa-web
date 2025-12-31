import React from 'react';
import { motion } from 'framer-motion';
import { useMusic } from '../../context/MusicContext';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
    const {
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        volume,
        togglePlayPause,
        playNext,
        playPrevious,
        seekTo,
        changeVolume
    } = useMusic();

    const [showVolume, setShowVolume] = React.useState(false);

    if (!currentTrack) return null;

    const formatTime = (seconds) => {
        if (!seconds || isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '90px',
                background: 'rgba(0, 0, 0, 0.98)',
                backdropFilter: 'blur(20px)',
                borderTop: '1px solid rgba(139, 92, 246, 0.3)',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
                padding: '0 30px'
            }}
        >
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr 1fr',
                alignItems: 'center',
                width: '100%',
                gap: '20px'
            }}>
                {/* Track Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        background: currentTrack.artwork ? `url(${currentTrack.artwork})` : 'linear-gradient(135deg, #8b5cf6, #d4af37)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        flexShrink: 0
                    }} />
                    <div style={{ minWidth: 0 }}>
                        <div style={{
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            {currentTrack.title}
                        </div>
                        <div style={{
                            fontSize: '0.8rem',
                            color: 'var(--text-muted)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            {currentTrack.artist}
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '15px'
                    }}>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={playPrevious}
                            style={{
                                background: 'none',
                                color: 'var(--text-primary)',
                                padding: '8px'
                            }}
                        >
                            <SkipBack size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={togglePlayPause}
                            style={{
                                background: 'var(--accent-gold)',
                                color: '#000',
                                borderRadius: '50%',
                                width: '45px',
                                height: '45px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            {isPlaying ? <Pause size={20} fill="#000" /> : <Play size={20} fill="#000" />}
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={playNext}
                            style={{
                                background: 'none',
                                color: 'var(--text-primary)',
                                padding: '8px'
                            }}
                        >
                            <SkipForward size={20} />
                        </motion.button>
                    </div>

                    {/* Progress Bar */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', minWidth: '40px' }}>
                            {formatTime(currentTime)}
                        </span>
                        <div
                            onClick={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const percentage = x / rect.width;
                                seekTo(percentage);
                            }}
                            style={{
                                flex: 1,
                                height: '4px',
                                background: 'rgba(255,255,255,0.1)',
                                position: 'relative',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{
                                width: `${progress}%`,
                                height: '100%',
                                background: 'var(--accent-gold)',
                                transition: 'width 0.1s linear'
                            }} />
                        </div>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', minWidth: '40px' }}>
                            {formatTime(duration)}
                        </span>
                    </div>
                </div>

                {/* Volume Control */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '10px',
                    position: 'relative'
                }}>
                    <button
                        onClick={() => setShowVolume(!showVolume)}
                        style={{
                            background: 'none',
                            color: 'var(--text-primary)',
                            padding: '8px'
                        }}
                    >
                        {volume > 0 ? <Volume2 size={20} /> : <VolumeX size={20} />}
                    </button>

                    {showVolume && (
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={(e) => changeVolume(parseFloat(e.target.value))}
                            style={{
                                width: '100px',
                                accentColor: 'var(--accent-gold)'
                            }}
                        />
                    )}
                </div>
            </div>

            {/* Mobile Responsive Styles */}
            <style>{`
        @media (max-width: 768px) {
          ${MusicPlayer.name} {
            height: 80px;
            padding: 0 15px;
          }
          ${MusicPlayer.name} > div {
            grid-template-columns: 1fr 1.5fr 0.5fr;
            gap: 10px;
          }
        }
      `}</style>
        </motion.div>
    );
};

export default MusicPlayer;

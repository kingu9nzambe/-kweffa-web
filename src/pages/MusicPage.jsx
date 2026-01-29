import React from 'react';
import { motion } from 'framer-motion';
import { Play, Heart } from 'lucide-react';
import { useMusic } from '../context/MusicContext';
import { albums } from '../data/albums';

const MusicPage = () => {
    const { playTrack, currentTrack, isPlaying, togglePlayPause } = useMusic();

    const allTracks = albums.flatMap(album =>
        album.tracks.map(track => ({
            ...track,
            albumTitle: album.title,
            albumArt: album.coverArt
        }))
    );

    const handlePlayTrack = (track) => {
        if (currentTrack?.id === track.id) {
            togglePlayPause();
        } else {
            // Pass the track object directly
            playTrack(track);
        }
    };

    return (
        <div className="min-h-screen bg-void-black text-white pb-32 selection:bg-regime-gold selection:text-black">
            {/* Hero */}
            <div className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-spirit-purple/20 to-transparent pointer-events-none"></div>
                <div className="container mx-auto relative z-10 text-center">
                    <motion.h1
                        className="text-6xl md:text-9xl font-black font-cinzel text-white mb-6 tracking-tighter"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-regime-gold to-yellow-200">VAULT</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-200 max-w-2xl mx-auto font-light tracking-widest uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Sacred Transmissions • Archive 001
                    </motion.p>
                </div>
            </div>

            {/* Albums */}
            <div className="container mx-auto px-6 mb-32">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-xs font-bold font-mono text-regime-gold uppercase tracking-[0.3em]">Collections</h2>
                    <div className="h-px bg-regime-gold/20 flex-grow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {albums.map((album, index) => (
                        <motion.div
                            key={album.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="aspect-square relative overflow-hidden rounded-sm mb-6 shadow-2xl">
                                {album.coverArt ? (
                                    <img src={album.coverArt} alt={album.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                ) : (
                                    <div className="w-full h-full bg-white/5 flex items-center justify-center">
                                        <div className="text-8xl opacity-20">💿</div>
                                    </div>
                                )}

                                {/* Overlay & Play */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                                    <button
                                        onClick={() => handlePlayTrack(album.tracks[0])}
                                        className="w-20 h-20 rounded-full border border-regime-gold text-regime-gold hover:bg-regime-gold hover:text-black flex items-center justify-center transition-all duration-300 transform scale-90 group-hover:scale-100"
                                    >
                                        <Play size={32} fill="currentColor" />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-cinzel text-white group-hover:text-regime-gold transition-colors duration-300">
                                    {album.title}
                                </h3>
                                <p className="text-gray-400 text-sm tracking-wide mt-1">{album.artist} • {new Date().getFullYear()}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* All Tracks - Premium Table */}
            <div className="container mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-xs font-bold font-mono text-regime-gold uppercase tracking-[0.3em]">Master Archive</h2>
                    <div className="h-px bg-regime-gold/20 flex-grow"></div>
                </div>

                <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/5">
                    {/* Header Row */}
                    <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 p-6 border-b border-white/5 text-xs font-bold text-gray-500 uppercase tracking-widest hidden md:grid">
                        <div className="w-12 text-center">#</div>
                        <div>Title</div>
                        <div>Album</div>
                        <div className="text-right">Time</div>
                    </div>

                    <div className="divide-y divide-white/5">
                        {allTracks.map((track, index) => (
                            <motion.div
                                key={track.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`group grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_1fr_auto] gap-4 p-4 md:p-6 items-center hover:bg-white/5 transition-colors duration-300 cursor-pointer ${currentTrack?.id === track.id ? 'bg-regime-gold/10' : ''
                                    }`}
                                onClick={() => handlePlayTrack(track)}
                            >
                                {/* Play/Index */}
                                <div className="w-12 flex justify-center">
                                    <span className="text-gray-500 text-sm font-mono group-hover:hidden">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                    <button className="hidden group-hover:flex text-regime-gold">
                                        <Play size={16} fill="currentColor" />
                                    </button>
                                </div>

                                {/* Title */}
                                <div>
                                    <h4 className={`font-medium text-lg ${currentTrack?.id === track.id ? 'text-regime-gold' : 'text-white group-hover:text-regime-gold'} transition-colors`}>
                                        {track.title}
                                    </h4>
                                    <span className="md:hidden text-xs text-gray-500">{track.albumTitle}</span>
                                </div>

                                {/* Album (Desktop) */}
                                <div className="hidden md:block text-gray-400 font-light text-sm">
                                    {track.albumTitle}
                                </div>

                                {/* Duration */}
                                <div className="text-right font-mono text-xs text-gray-500">
                                    {track.duration}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Support Notice */}
            <div className="container mx-auto px-6 mt-32">
                <div className="max-w-3xl mx-auto text-center border border-white/10 p-12 rounded-lg relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-regime-gold/10 via-transparent to-regime-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-cinzel mb-4 text-white">Support The Regime</h3>
                        <p className="text-gray-300 mb-8 font-light">
                            All transmissions are free. Contributions fuel the expansion of the Ngombongola map.
                        </p>
                        <button className="px-10 py-3 bg-white text-black font-bold tracking-[0.2em] uppercase text-xs hover:bg-regime-gold transition-colors duration-300">
                            Contribute Fund
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicPage;

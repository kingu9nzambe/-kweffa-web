import React from 'react';
import { motion } from 'framer-motion';
import { Play, Heart } from 'lucide-react';
import { useMusic } from '../context/MusicContext';
import { albums } from '../data/albums';

const MusicPage = () => {
    const { playTrack, currentTrack, isPlaying, togglePlay } = useMusic();

    const allTracks = albums.flatMap(album =>
        album.tracks.map(track => ({
            ...track,
            albumTitle: album.title,
            albumArt: album.coverArt
        }))
    );

    const handlePlayTrack = (track) => {
        if (currentTrack?.id === track.id) {
            togglePlay();
        } else {
            const trackIndex = allTracks.findIndex(t => t.id === track.id);
            playTrack(trackIndex);
        }
    };

    return (
        <div className="min-h-screen bg-void-black text-white pb-32">
            {/* Hero */}
            <div className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-spirit-purple/40 to-transparent"></div>
                <div className="container mx-auto relative z-10 text-center">
                    <motion.h1
                        className="text-5xl md:text-7xl font-cinzel text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        The <span className="text-regime-gold">Vault</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Sacred transmissions • Spiritual chants • Ancestral rhythms
                    </motion.p>
                </div>
            </div>

            {/* Albums */}
            <div className="container mx-auto px-6 mb-20">
                <h2 className="text-3xl font-cinzel mb-8">Collections</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {albums.map((album, index) => (
                        <motion.div
                            key={album.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white/5 border border-white/10 hover:border-regime-gold rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="aspect-square bg-gradient-to-br from-spirit-purple to-leaf-green relative overflow-hidden">
                                {album.coverArt ? (
                                    <img src={album.coverArt} alt={album.title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-6xl">🐲</div>
                                )}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button
                                        onClick={() => handlePlayTrack(album.tracks[0])}
                                        className="w-16 h-16 rounded-full bg-regime-gold text-black flex items-center justify-center hover:scale-110 transition-transform"
                                    >
                                        <Play size={24} fill="currentColor" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-cinzel mb-2 group-hover:text-regime-gold transition-colors">
                                    {album.title}
                                </h3>
                                <p className="text-sm text-gray-400">{album.artist}</p>
                                <p className="text-xs text-gray-500 mt-2">{album.tracks.length} tracks</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* All Tracks */}
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-cinzel mb-8">All Transmissions</h2>
                <div className="space-y-2">
                    {allTracks.map((track, index) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${currentTrack?.id === track.id
                                    ? 'bg-regime-gold/20 border border-regime-gold'
                                    : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                                }`}
                        >
                            <div className="flex items-center gap-4 flex-1">
                                <button
                                    onClick={() => handlePlayTrack(track)}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentTrack?.id === track.id && isPlaying
                                            ? 'bg-regime-gold text-black'
                                            : 'bg-white/10 text-white hover:bg-regime-gold hover:text-black'
                                        }`}
                                >
                                    <Play size={16} fill={currentTrack?.id === track.id && isPlaying ? "currentColor" : "none"} />
                                </button>

                                <div className="flex-1">
                                    <h4 className={`font-medium ${currentTrack?.id === track.id ? 'text-regime-gold' : 'text-white'}`}>
                                        {track.title}
                                    </h4>
                                    <p className="text-sm text-gray-400">{track.albumTitle}</p>
                                </div>

                                <span className="text-sm font-mono text-gray-500">
                                    {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Support Notice */}
            <div className="container mx-auto px-6 mt-20">
                <div className="bg-gradient-to-br from-spirit-purple/30 to-leaf-green/20 border border-regime-gold/30 rounded-lg p-12 text-center">
                    <h3 className="text-3xl font-cinzel mb-4">Support The Work</h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        All music is available for streaming. If these transmissions resonate with you,
                        consider supporting through a name-your-price contribution.
                    </p>
                    <button className="px-10 py-4 bg-regime-gold text-black hover:bg-white transition-all duration-300 font-bold tracking-widest uppercase text-sm">
                        Contribute
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MusicPage;

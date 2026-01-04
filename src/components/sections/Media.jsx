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
        <section id="media" className="min-h-screen py-32 bg-void-black relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-7xl font-bold font-cinzel mb-6 text-white">
                        Media & <span className="text-regime-gold">Content</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-light max-w-2xl">
                        Explore the teachings, philosophy, and creative expressions from the Regime.
                    </p>
                </motion.div>

                {/* Featured Track */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-glass-black border border-white/10 rounded-3xl p-8 md:p-12 mb-24 grid md:grid-cols-[200px_1fr] gap-10 items-center hover:border-regime-gold/30 transition-colors duration-500"
                >
                    <div className="w-full md:w-[200px] h-[200px] bg-gradient-to-br from-spirit-purple to-regime-gold rounded-full flex items-center justify-center relative shadow-lg shadow-regime-gold/20 animate-pulse-slow">
                        <Music2 size={80} className="text-black/80" strokeWidth={1.5} />
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-3xl md:text-5xl font-bold font-cinzel mb-4 text-white">
                            Bantu Kindoki <span className="text-regime-gold text-2xl block md:inline md:text-4xl font-light font-cormorant">(Original Sound)</span>
                        </h3>
                        <p className="text-gray-400 mb-8 text-lg font-light tracking-wide">
                            Original Sound - Kweffa3
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#C6A87C", color: "#000" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border border-regime-gold text-regime-gold px-10 py-4 flex items-center gap-3 text-sm font-bold tracking-widest uppercase rounded-full transition-all duration-300 mx-auto md:mx-0"
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
                    className="mb-12 flex items-center gap-4"
                >
                    <h3 className="text-3xl font-bold font-cinzel text-white flex items-center gap-4">
                        Latest from TikTok
                        <span className="text-xs bg-spirit-purple text-white px-3 py-1 rounded-full font-bold tracking-wider">
                            @kweffa3
                        </span>
                    </h3>
                </motion.div>

                {/* Video Grid - Real TikTok Videos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[300px]">
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
                            className={`group relative overflow-hidden rounded-2xl border border-white/10 hover:border-regime-gold/50 transition-all duration-300 ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                        >
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-spirit-purple/20 to-black/90 z-0"></div>

                            {/* Pinned Badge */}
                            {video.isPinned && (
                                <div className="absolute top-4 right-4 bg-regime-gold text-black px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm z-20">
                                    Pinned
                                </div>
                            )}

                            {/* Recent Badge */}
                            {video.isRecent && (
                                <div className="absolute top-4 right-4 bg-green-500 text-black px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm z-20">
                                    New
                                </div>
                            )}

                            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 bg-gradient-to-t from-black via-black/50 to-transparent">
                                <h4 className={`font-bold font-cinzel leading-tight mb-2 text-white group-hover:text-regime-gold transition-colors ${idx === 0 ? 'text-3xl' : 'text-xl'}`}>
                                    {video.title}
                                </h4>
                                <p className="text-sm text-gray-400 mb-3 line-clamp-2 font-light">
                                    {video.caption}
                                </p>
                                <div className="flex gap-4 text-xs text-gray-500 items-center">
                                    <span>{video.views} views</span>
                                    <ExternalLink size={12} />
                                </div>
                            </div>

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm z-20">
                                <div className="w-16 h-16 bg-regime-gold rounded-full flex items-center justify-center shadow-glow-gold scale-0 group-hover:scale-100 transition-transform duration-300">
                                    <Play size={32} fill="#000" className="text-black ml-1" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* TikTok CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center p-12 border border-spirit-purple/20 bg-spirit-purple/5 rounded-3xl"
                >
                    <h3 className="text-3xl font-cinzel font-bold mb-4 text-white">
                        Follow the Movement
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                        Join @kweffa3 on TikTok for daily teachings and content
                    </p>
                    <motion.a
                        href="https://www.tiktok.com/@kweffa3"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-spirit-purple text-white text-sm font-bold tracking-widest uppercase rounded-full hover:bg-spirit-purple/80 transition-colors"
                    >
                        View on TikTok <ExternalLink size={18} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Media;

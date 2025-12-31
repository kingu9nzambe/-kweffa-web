import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Heart, BookOpen, Flame, Sparkles, Users } from 'lucide-react';

const ServicesPage = () => {
    const services = [
        {
            icon: Eye,
            title: "Spiritual Consultations",
            subtitle: "Divination & Guidance",
            description: "Through the eyes of N'disu, we peer into the currents of destiny. Receive guidance from ancient Obeah traditions and Bantu Kindoki wisdom to navigate your path.",
            features: ["Personal Readings", "Life Path Analysis", "Ancestral Connection"]
        },
        {
            icon: Heart,
            title: "Healing & Harmony",
            subtitle: "Bantu Kindoki Restoration",
            description: "Restore balance to body, mind, and spirit through time-honored Bantu healing practices. Address spiritual blockages and realign with your authentic power.",
            features: ["Energy Cleansing", "Spiritual Protection", "Harmony Rituals"]
        },
        {
            icon: BookOpen,
            title: "Teachings & Mentorship",
            subtitle: "Nguzu Mulongi Sessions",
            description: "Learn the stages of truth and decolonize your understanding. Study Bantu cosmology, Kongo Bongo heritage, and the sacred geography of the Lubolo people.",
            features: ["One-on-One Mentoring", "Group Classes", "Sacred Text Study"]
        },
        {
            icon: Flame,
            title: "Initiations & Ceremonies",
            subtitle: "Enter The Regime",
            description: "For those ready to step into sacred responsibility. Become a custodian of the map older than time through formal initiation into the Ngombongola lineage.",
            features: ["Initiation Rites", "Ceremonial Preparation", "Lineage Integration"]
        },
        {
            icon: Sparkles,
            title: "Creative Liberation",
            subtitle: "Decolonizing Creativity",
            description: "Unlock your artistic and spiritual expression free from colonial constructs. Fuse ancestral wisdom with modern creative practice.",
            features: ["Creative Consulting", "Ritual Art", "Cultural Reclamation"]
        },
        {
            icon: Users,
            title: "Custom Requests",
            subtitle: "Bespoke Spiritual Work",
            description: "Every journey is unique. Contact us for personalized spiritual services, ceremonial work, or community gatherings tailored to your needs.",
            features: ["Private Ceremonies", "Group Events", "Special Requests"]
        }
    ];

    return (
        <div className="min-h-screen bg-void-black text-white">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-spirit-purple/30 to-transparent"></div>
                <div className="container mx-auto relative z-10 text-center">
                    <motion.h1
                        className="text-5xl md:text-7xl font-cinzel text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Sacred <span className="text-regime-gold">Offerings</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Authentic spiritual services rooted in Bantu Kindoki and the Ngyanuba Nation heritage
                    </motion.p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative bg-white/5 border border-white/10 hover:border-regime-gold rounded-lg p-8 hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="mb-6">
                                <service.icon className="w-12 h-12 text-regime-gold mb-4" strokeWidth={1.5} />
                                <h3 className="text-2xl font-cinzel text-white mb-2 group-hover:text-regime-gold transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-regime-gold/80 uppercase tracking-widest">
                                    {service.subtitle}
                                </p>
                            </div>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature) => (
                                    <li key={feature} className="text-sm text-gray-500 flex items-center gap-2">
                                        <span className="w-1 h-1 bg-regime-gold rounded-full"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-3 border border-regime-gold/50 text-regime-gold hover:bg-regime-gold hover:text-black transition-all duration-300 font-bold tracking-wider text-sm">
                                INQUIRE
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block bg-white/5 border border-white/10 rounded-lg p-12">
                        <h3 className="text-3xl font-cinzel mb-4">Ready to Begin?</h3>
                        <p className="text-gray-400 mb-6 max-w-md">
                            All consultations begin with a conversation. Reach out to discuss your spiritual needs.
                        </p>
                        <a href="/contact" className="inline-block px-10 py-4 bg-regime-gold text-black hover:bg-white transition-all duration-300 font-bold tracking-widest uppercase text-sm">
                            Contact The Regime
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage;

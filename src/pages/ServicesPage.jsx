import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Heart, BookOpen, Flame, Sparkles, Users } from 'lucide-react';

const ServicesPage = () => {
    const services = [
        {
            icon: Eye,
            title: "Ngombo Consultation",
            subtitle: "Sacred Spiritual Diagnosis",
            description: "A profound diagnostic session blending Ngombo artifacts and ancestral wisdom. Available In-Person or Online.",
            pricing: [
                { label: "Basic", price: "$30" },
                { label: "Standard", price: "$60" },
                { label: "Advanced", price: "$90" },
                { label: "Full Reading", price: "$120" }
            ],
            custom: "Custom Readings: $150 - $800",
            ancestral: "Ancestral Roots: $250 - $650",
            features: ["In-Person or Online", "Spiritual Diagnosis", "Path Correction"]
        },
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
        <div className="min-h-screen bg-void-black text-white selection:bg-regime-gold selection:text-black">
            {/* Hero Section */}
            <div className="relative pt-32 pb-16 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-spirit-purple/20 to-transparent pointer-events-none"></div>
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-6xl md:text-8xl font-cinzel text-white mb-6 tracking-tight">
                            Sacred <span className="text-transparent bg-clip-text bg-gradient-to-r from-regime-gold to-white">Offerings</span>
                        </h1>
                        <p className="text-xl text-white font-light tracking-wide max-w-2xl border-l-2 border-regime-gold pl-6 py-2">
                            Authentic spiritual services rooted in Bantu Kindoki and the Ngyanuba Nation heritage.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Services List */}
            <div className="container mx-auto px-6 pb-32">
                <div className="border-t border-white/10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group border-b border-white/10 hover:border-regime-gold/50 transition-colors duration-500 py-12 md:py-16 relative overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-regime-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10 flex flex-col md:flex-row md:items-baseline justify-between gap-8">
                                {/* Left: Title & Icon */}
                                <div className="md:w-1/3">
                                    <div className="flex items-center gap-4 mb-4">
                                        <service.icon className="w-6 h-6 text-regime-gold opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                                        <span className="text-regime-gold text-xs font-bold uppercase tracking-[0.2em]">0{index + 1}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-cinzel text-white group-hover:text-regime-gold transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Middle: Subtitle & Description */}
                                <div className="md:w-1/3">
                                    <h4 className="text-lg text-white font-serif italic mb-3 opacity-90">
                                        {service.subtitle}
                                    </h4>
                                    <p className="text-white/80 leading-relaxed font-light text-lg">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Right: Features & Action */}
                                <div className="md:w-1/4 flex flex-col items-start md:items-end gap-6">
                                    {/* Pricing / Features Display */}
                                    <div className="text-right hidden md:block">
                                        {service.pricing ? (
                                            <div className="space-y-2">
                                                <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-2">
                                                    {service.pricing.map((tier) => (
                                                        <React.Fragment key={tier.label}>
                                                            <span className="text-gray-400 text-xs uppercase tracking-wider">{tier.label}</span>
                                                            <span className="text-regime-gold text-xs font-mono">{tier.price}</span>
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                                {service.custom && <p className="text-gray-500 text-[10px] italic">{service.custom}</p>}
                                                {service.ancestral && <p className="text-spirit-purple text-[10px] font-bold uppercase">{service.ancestral}</p>}
                                            </div>
                                        ) : (
                                            <ul className="space-y-1">
                                                {service.features.map((feature) => (
                                                    <li key={feature} className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <button className="px-8 py-3 border border-white/20 rounded-full text-white text-sm tracking-widest hover:bg-regime-gold hover:text-black hover:border-regime-gold transition-all duration-300 transform group-hover:translate-x-2">
                                        INQUIRE
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 border-t border-regime-gold/30 pt-20 text-center"
                >
                    <h3 className="text-4xl md:text-5xl font-cinzel text-white mb-8">Ready to Walk the Path?</h3>
                    <a href="/contact" className="inline-block px-12 py-5 bg-regime-gold text-black font-bold text-lg tracking-widest hover:bg-white transition-all duration-300 rounded-sm">
                        CONTACT THE REGIME
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage;

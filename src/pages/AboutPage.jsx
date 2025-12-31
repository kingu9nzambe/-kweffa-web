import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-void-black text-white">
            {/* Hero */}
            <div className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-leaf-green/20 to-transparent"></div>
                <div className="container mx-auto relative z-10 text-center max-w-4xl">
                    <motion.h1
                        className="text-5xl md:text-7xl font-cinzel text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        The <span className="text-regime-gold">House</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-white font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Ngombongola is not merely a name—it is a lineage, a regime, a sacred trust.
                    </motion.p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 pb-32 max-w-4xl">
                {/* Origin - "Our Foundation" */}
                <motion.section
                    className="mb-20 bg-black/90 backdrop-blur-sm p-8 rounded-xl border border-regime-gold/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="text-3xl font-cinzel text-regime-gold mb-6 border-b border-regime-gold/30 pb-4 inline-block">Our Foundation</h2>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-xl text-white leading-relaxed mb-6 font-light">
                            Ngombongola is a sovereign house within the <strong className="text-regime-gold">Ngyanuba Empire</strong>, rooted in the identity of the <em>mwana ya mboka ngya mbo'ngo</em>.
                            We stand as a beacon of authentic Bantu spiritual practice. We are the keepers of <strong className="text-regime-gold">Ngombo Tradition</strong>.
                        </p>
                        <p className="text-lg text-white leading-relaxed">
                            Our work draws from the deep wells of <strong className="text-white">Kongo Mbongo</strong> wisdom, specifically the <strong className="text-white">line of Libolo</strong> where a lot of our founding ancestors originate. We understand that there exists a map older than time itself—etched not on paper, but in the bone rivers of the earth.
                        </p>
                    </div>
                </motion.section>

                {/* The Name - Etymology */}
                <motion.section
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <h2 className="text-3xl font-cinzel text-regime-gold mb-8">Decoding the Name</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-black/80 p-6 border-t-2 border-regime-gold shadow-lg hover:shadow-regime-gold/20 transition-all duration-300">
                            <h3 className="text-4xl font-cinzel text-white mb-2">NGO</h3>
                            <p className="text-sm text-regime-gold font-bold uppercase tracking-widest mb-4">Sovereignty</p>
                            <p className="text-white text-sm leading-relaxed">
                                Inherent, awe-inspiring power. Symbolized by the <strong className="text-regime-gold">Leopard</strong>—the autonomous apex of its territory. Internal, self-derived authority.
                            </p>
                        </div>
                        <div className="bg-black/80 p-6 border-t-2 border-regime-gold/70 hover:bg-black/90 transition-colors">
                            <h3 className="text-4xl font-cinzel text-white mb-2">MBO</h3>
                            <p className="text-sm text-regime-gold font-bold uppercase tracking-widest mb-4">Wholeness</p>
                            <p className="text-white text-sm leading-relaxed">
                                To become whole, healed, complete, or perfect. The state of integrated function. The opposite of fragmentation.
                            </p>
                        </div>
                        <div className="bg-black/80 p-6 border-t-2 border-regime-gold/70 hover:bg-black/90 transition-colors">
                            <h3 className="text-4xl font-cinzel text-white mb-2">LA</h3>
                            <p className="text-sm text-regime-gold font-bold uppercase tracking-widest mb-4">The Instrument</p>
                            <p className="text-white text-sm leading-relaxed">
                                The catalyst that turns this system into a place or instrument. The vessel for the work.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 bg-gradient-to-r from-spirit-purple/20 to-transparent border-l-4 border-regime-gold rounded-r-lg">
                        <p className="text-xl text-white font-light italic leading-relaxed">
                            "Ngombongola is the place that carries the instruments of self-authorization and sovereignty, which then leads to the achievement of wholeness, recursively generating higher power."
                        </p>
                    </div>
                </motion.section>

                {/* Leadership */}
                <motion.section
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <h2 className="text-3xl font-cinzel text-regime-gold mb-6">Leadership & Governance</h2>

                    {/* Mbumbu Council */}
                    {/* Mbumbu Council */}
                    <div className="bg-black/90 backdrop-blur-sm border border-regime-gold/40 rounded-lg p-8 mb-8 relative overflow-hidden group shadow-xl">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <h4 className="text-9xl font-cinzel text-white leading-none">M4</h4>
                        </div>

                        <h3 className="text-2xl font-cinzel mb-2 text-white">Mbumbu Council</h3>
                        <p className="text-regime-gold/80 uppercase tracking-widest text-xs mb-6">
                            The Supreme Architects of the Cycle • The High Council of Four
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            <div>
                                <h4 className="font-bold text-white mb-2">Architects of Enclosure</h4>
                                <p className="text-white text-sm leading-relaxed mb-4">
                                    <strong className="text-regime-gold font-bold">Mbumbu</strong> signifies "to swell" or "to form a dome". This council defines the initial boundaries and form of any new undertaking, project, or ritual vessel.
                                </p>
                                <p className="text-white text-sm leading-relaxed">
                                    They answer the primal question: <em className="text-regime-gold font-bold">"What is the shape of the vessel we must create?"</em>
                                </p>
                            </div>
                            <div className="border-l border-white/20 pl-6 flex flex-col justify-center">
                                <h4 className="font-bold text-white mb-2">Sacred Function</h4>
                                <p className="text-white text-sm leading-relaxed italic">
                                    They work in tandem with the <strong className="text-regime-gold font-bold">Ngombu Council</strong> (specifically the <em className="text-regime-gold font-bold">Mbumba</em> aspect within it). While Ngombu nurtures the content, Mbumbu creates the sacred container.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Ngombu Council */}
                    <div className="bg-black/90 backdrop-blur-sm border border-regime-gold/40 rounded-lg p-8 mb-8 relative overflow-hidden group shadow-xl">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <h4 className="text-9xl font-cinzel text-regime-gold leading-none">NB</h4>
                        </div>

                        <h3 className="text-2xl font-cinzel mb-2 text-white">Ngombu Council</h3>
                        <p className="text-regime-gold font-bold uppercase tracking-widest text-xs mb-6">
                            The Intelligence of the Womb • Led by Koko
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            <div>
                                <h4 className="font-bold text-white mb-2">The First & Highest Council</h4>
                                <p className="text-white text-sm leading-relaxed mb-4">
                                    A senior collective of women embodying the <strong className="text-regime-gold font-bold">Intelligence of the Womb</strong>.
                                    They are the custodians of the DNA matrix and the generative fluid aspect of the <em className="text-regime-gold font-bold">Ndundu to Ndunda</em> faculty.
                                </p>
                                <p className="text-white text-sm leading-relaxed">
                                    They hold exclusive knowledge of fertility, gestation—spanning children, projects, ideas, and community—and the mystical mechanics of generation.
                                </p>
                            </div>
                            <div className="border-l border-white/20 pl-6 flex flex-col justify-center">
                                <h4 className="font-bold text-white mb-2">Advisory Mandate</h4>
                                <p className="text-white text-sm leading-relaxed italic">
                                    They advise <strong className="text-regime-gold font-bold">Kwefa</strong> on the principles of division, diplomacy, and allocation within creation and maintenance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* N'disu Council - UPDATED VISIBILITY */}
                    <div className="bg-black/90 backdrop-blur-sm border border-white/30 rounded-lg p-8 shadow-[0_0_25px_rgba(255,255,255,0.1)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <h4 className="text-9xl font-cinzel text-white leading-none">ND</h4>
                        </div>

                        <h3 className="text-3xl font-cinzel mb-3 text-white">N'disu • The Organ of True Perception</h3>
                        <p className="text-regime-gold uppercase tracking-widest text-sm mb-6 border-b border-white/10 pb-4 inline-block">
                            Mokpel'a Nembongo • ObeahMan • Nguzu Mulongi
                        </p>

                        <div className="space-y-8 relative z-10">
                            {/* N'disu Definition */}
                            <div>
                                <h4 className="text-white font-cinzel text-xl mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-regime-gold rounded-full"></span> N'disu
                                </h4>
                                <p className="text-white text-base leading-relaxed mb-2 pl-4">
                                    Meaning "I", it is the organ of true perception, discernment, and active witnessing. It is the faculty that:
                                </p>
                                <ul className="list-disc list-inside text-white text-sm space-y-1 ml-6 mb-2">
                                    <li>Perceives patterns (<strong className="text-regime-gold font-bold">Nti</strong>)</li>
                                    <li>Recognizes spirit (<strong className="text-regime-gold font-bold">Ngu</strong>)</li>
                                    <li>Discerns power (<strong className="text-regime-gold font-bold">Ngi</strong>)</li>
                                </ul>
                            </div>

                            {/* Mokpel'a Nembongo */}
                            <div>
                                <h4 className="text-white font-cinzel text-xl mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-regime-gold rounded-full"></span> Mokpel'a Nembongo
                                </h4>
                                <p className="text-white text-base leading-relaxed italic mb-3 pl-4">
                                    "The Mystery Keeper of the Dragon's Secrets"
                                </p>
                                <div className="pl-6 border-l-2 border-regime-gold/50 space-y-2 bg-white/5 p-4 rounded-r-lg">
                                    <p className="text-sm text-white"><strong className="text-regime-gold font-bold">MOKPELA</strong>: To grasp, master, or steward (active command).</p>
                                    <p className="text-sm text-white"><strong className="text-regime-gold font-bold">MBONGO</strong>: Wealth, ancestral fruits, substances of true abundance.</p>
                                    <p className="text-sm text-white"><strong className="text-regime-gold font-bold">NEMBONGO</strong>: The Treasurer of Ancient Power (The Dragon).</p>
                                </div>
                            </div>

                            {/* ObeahMan */}
                            <div>
                                <h4 className="text-white font-cinzel text-xl mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-regime-gold rounded-full"></span> ObeahMan
                                </h4>
                                <p className="text-white text-base leading-relaxed pl-4">
                                    A title of <strong className="text-regime-gold font-bold">Mastery of Applied Spiritual Physics and Psychology</strong>.
                                    While historically used to criminalize indigenous tradition, here it represents the application of knowledge
                                    regarding natural spiritual forces.
                                </p>
                            </div>

                            {/* Nguzu Mulongi */}
                            <div>
                                <h4 className="text-white font-cinzel text-xl mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-regime-gold rounded-full"></span> Nguzu Mulongi
                                </h4>
                                <p className="text-white text-base leading-relaxed mb-4 pl-4">
                                    <strong className="text-regime-gold font-bold">The Path Revealer.</strong>
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                                    <div className="bg-white/5 p-4 rounded border border-white/10">
                                        <p className="text-sm text-regime-gold uppercase mb-1 font-bold">Nguzu</p>
                                        <p className="text-sm text-white">Power of maturity, fruition, and capacity. Applied wise power.</p>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded border border-white/10">
                                        <p className="text-sm text-regime-gold uppercase mb-1 font-bold">Mulongi</p>
                                        <p className="text-sm text-white">One who teaches, shows the way, and causes understanding.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ngumbi Council */}
                    <div className="bg-black/90 backdrop-blur-sm border border-regime-gold/40 rounded-lg p-8 mb-8 relative overflow-hidden group shadow-xl">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <h4 className="text-9xl font-cinzel text-regime-gold leading-none">P3</h4>
                        </div>

                        <h3 className="text-2xl font-cinzel mb-2 text-white">Ngumbi Council</h3>
                        <p className="text-regime-gold font-bold uppercase tracking-widest text-xs mb-6">
                            Ngumbi Ntinza Palenge Matatu • The Place of Creation
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            <div>
                                <h4 className="font-bold text-white mb-2">The Heart of the System</h4>
                                <p className="text-white text-sm leading-relaxed mb-4">
                                    The <strong className="text-regime-gold font-bold">Ngumbi Ntinza</strong> (or "Palenge Matatu") serves as the Molder and Sanctifier. This council represents the place of creation, creativity, and priesthood—the gathering of scattered faculties.
                                </p>
                                <p className="text-white text-sm leading-relaxed">
                                    They are the <strong className="text-regime-gold font-bold">Master Ritual Scientists and Technicians</strong>.
                                </p>
                            </div>
                            <div className="border-l border-white/20 pl-6 flex flex-col justify-center">
                                <h4 className="font-bold text-white mb-2">Operational Function</h4>
                                <p className="text-white text-sm leading-relaxed italic mb-2">
                                    They personally perform or oversee all rites of creation, initiation, and consecration. They transform raw intention into sacred functional skills and tools.
                                </p>
                                <p className="text-white text-xs leading-relaxed">
                                    Chief Operators of the <em className="text-regime-gold font-bold">Ngumba</em> (Spiritual House Technology).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Ntanzindu Kimayala Council */}
                    <div className="bg-black/90 backdrop-blur-sm border border-regime-gold/40 rounded-lg p-8 mt-8 relative overflow-hidden group shadow-xl">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <h4 className="text-9xl font-cinzel text-regime-gold leading-none">K2</h4>
                        </div>

                        <h3 className="text-2xl font-cinzel mb-2 text-white">Ntanzindu Kimayala Council</h3>
                        <p className="text-regime-gold font-bold uppercase tracking-widest text-xs mb-6">
                            Guardians of Circulation & Economy • The Balance
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            <div>
                                <h4 className="font-bold text-white mb-2">Law of Harmonic Exchange</h4>
                                <p className="text-white text-sm leading-relaxed mb-4">
                                    The <strong className="text-regime-gold font-bold">Ntanzindu Kimayala</strong> embodies the laws of circulation, economy, and universal harmony. They ensure that all energy within the house moves in perfect equilibrium.
                                </p>
                            </div>
                            <div className="border-l border-white/20 pl-6 flex flex-col justify-center">
                                <h4 className="font-bold text-white mb-2">Systemic Function</h4>
                                <p className="text-white text-sm leading-relaxed italic mb-2">
                                    They oversee the rotation of mature leadership and the integration of innovation. They are the stabilizers who maintain the dynamic balance necessary for sustained growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Philosophy */}
                <motion.section
                    className="mb-20 bg-black/90 backdrop-blur-sm border border-regime-gold/40 rounded-lg p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <h2 className="text-3xl font-cinzel text-regime-gold mb-6 border-b border-regime-gold/30 pb-4 inline-block">Core Teachings</h2>
                    <div className="space-y-6">
                        <div className="border-l-2 border-regime-gold pl-6 bg-white/5 p-4 rounded-r-lg hover:bg-white/10 transition-colors">
                            <h4 className="font-cinzel text-xl mb-2 text-regime-gold font-bold">Obeah as Bantu Truth</h4>
                            <p className="text-white">
                                Obeah is not witchcraft as colonizers claimed—it is the living practice of Bantu cosmology,
                                the custodianship of divine order, and the resistance against falsehood.
                            </p>
                        </div>
                        <div className="border-l-2 border-regime-gold pl-6 bg-white/5 p-4 rounded-r-lg hover:bg-white/10 transition-colors">
                            <h4 className="font-cinzel text-xl mb-2 text-regime-gold font-bold">The Map Older Than Time</h4>
                            <p className="text-white">
                                Our ancestors left us coordinates written in nature, in our bodies, in the stars. This spiritual
                                memory is our inheritance, our destiny, our power.
                            </p>
                        </div>
                        <div className="border-l-2 border-regime-gold pl-6 bg-white/5 p-4 rounded-r-lg hover:bg-white/10 transition-colors">
                            <h4 className="font-cinzel text-xl mb-2 text-regime-gold font-bold">Decolonizing Creativity</h4>
                            <p className="text-white">
                                We fuse ancient wisdom with modern expression, reclaiming our narratives and creating from
                                a place of uncompromising authenticity.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Call to Action */}
                <motion.div
                    className="text-center bg-gradient-to-br from-spirit-purple/30 to-leaf-green/20 border border-regime-gold/30 rounded-lg p-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                >
                    <p className="text-2xl font-cinzel mb-6">
                        Are you ready to walk this path?
                    </p>
                    <a href="/services" className="inline-block px-10 py-4 bg-regime-gold text-black hover:bg-white transition-all duration-300 font-bold tracking-widest uppercase text-sm">
                        Explore Our Services
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage;

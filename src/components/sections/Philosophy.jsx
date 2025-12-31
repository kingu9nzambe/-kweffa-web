import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Philosophy = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.3, 1, 0.3]);
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.3, 1, 0.3]);
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.7, 1], [0.3, 1, 0.3]);

    const principles = [
        {
            number: "01",
            title: "Royal Ancestry",
            desc: "We are not descendants of slaves, but of Kings and Queens. The Bantu spirit flows through our veins, regal and unbroken.",
            opacity: opacity1
        },
        {
            number: "02",
            title: "Decolonized Mind",
            desc: "Strip away the layers of colonial thought. Reveal the raw, creative power that has always existed within the African consciousness.",
            opacity: opacity2
        },
        {
            number: "03",
            title: "Obeah Power",
            desc: "Harness the spiritual energy of the universe. Manifest art, music, and truth through the ancient wisdom of our ancestors.",
            opacity: opacity3
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="philosophy"
            style={{
                minHeight: '200vh',
                padding: '120px 0',
                position: 'relative',
                background: 'linear-gradient(180deg, var(--bg-void) 0%, var(--bg-deep) 50%, var(--bg-void) 100%)'
            }}
        >
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        marginBottom: '100px',
                        position: 'sticky',
                        top: '100px'
                    }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        marginBottom: '30px',
                        fontWeight: 900,
                        letterSpacing: '-0.02em'
                    }}>
                        Our Philosophy
                    </h2>
                    <div style={{
                        width: '80px',
                        height: '2px',
                        background: 'var(--accent-gold)',
                        margin: '0 auto'
                    }}></div>
                </motion.div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '200px',
                    marginTop: '150px'
                }}>
                    {principles.map((principle, idx) => (
                        <motion.div
                            key={idx}
                            style={{
                                opacity: principle.opacity,
                                padding: '60px 0',
                                borderLeft: '1px solid rgba(139, 92, 246, 0.2)'
                            }}
                        >
                            <div style={{
                                maxWidth: '900px',
                                marginLeft: idx % 2 === 0 ? '60px' : 'auto',
                                marginRight: idx % 2 === 0 ? 'auto' : '60px'
                            }}>
                                <motion.div
                                    style={{
                                        fontSize: '1rem',
                                        color: 'var(--accent-purple)',
                                        marginBottom: '20px',
                                        fontFamily: 'var(--font-body)',
                                        fontWeight: 600,
                                        letterSpacing: '4px'
                                    }}
                                >
                                    {principle.number}
                                </motion.div>
                                <motion.h3
                                    style={{
                                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                                        marginBottom: '30px',
                                        fontWeight: 900,
                                        background: 'linear-gradient(90deg, #ffffff 0%, var(--accent-mystical) 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}
                                >
                                    {principle.title}
                                </motion.h3>
                                <motion.p
                                    style={{
                                        fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                                        color: 'var(--text-muted)',
                                        lineHeight: 1.8,
                                        fontWeight: 300
                                    }}
                                >
                                    {principle.desc}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;

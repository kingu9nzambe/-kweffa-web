import React from 'react';

const CosmogramSpiral = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[#050505] pointer-events-none">
            {/* 1. Deep Space Background - Full Coverage */}
            <div className="absolute inset-0 bg-black" />

            {/* 2. Rotating COSMIC DNA SPIRAL - Full Screen Fit */}
            <div className="cosmos-spiral-container-fullscreen">
                <div
                    className="cosmos-spiral-texture-fullscreen"
                    style={{
                        backgroundImage: `url('/cosmic_dna_spiral_texture_1767193177824.png')`
                    }}
                />
            </div>

            {/* 3. CLEAN DRAGON HEAD - Centered and Sharp - Using CSS Masking to clip noise */}
            {/* 3. CLEAN DRAGON HEAD - Centered and Sharp - Using CSS Masking to clip noise */}
            <div
                className="dragon-head-clean-center"
                style={{
                    backgroundImage: `url('/dragon_head_only_1767192742304.png')`
                }}
            >
                {/* BLINKING LAYERS - Positioned over eyes */}
                <div className="eye-blink-left"></div>
                <div className="eye-blink-right"></div>
            </div>

            {/* 4. Unified Atmosphere */}
            <div className="vignette-overlay-soft" />
        </div>
    );
};

export default CosmogramSpiral;

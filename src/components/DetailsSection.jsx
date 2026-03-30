import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './DetailsSection.css';
import exteriorImg from '../assets/spectre_engineering.png';

// Official Genuine Rolls-Royce Imagery
const interiorImg = 'https://i.pinimg.com/1200x/f7/84/bd/f784bd54ec25adc47213248c161efde7.jpg'; // Starlight Headliner and Fascia
const detailImg = 'https://i.pinimg.com/1200x/06/84/7d/06847d106ab8f61932144d6e61a0e85c.jpg'; // Spirit of Ecstasy detail

const DetailsSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  // Layer 1: Exterior image starts fully visible, scale up slowly, fade out as we scroll
  const scale1 = useTransform(smoothProgress, [0, 0.35], [1, 1.1]);
  const opacity1 = useTransform(smoothProgress, [0.25, 0.35], [1, 0]);

  // Layer 2: Interior image fades in, scales slightly, fades out
  const scale2 = useTransform(smoothProgress, [0.3, 0.7], [1.1, 1]);
  const opacity2 = useTransform(smoothProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);

  // Layer 3: Details image
  const scale3 = useTransform(smoothProgress, [0.65, 1], [1.1, 1]);
  const opacity3 = useTransform(smoothProgress, [0.65, 0.75, 1], [0, 1, 1]);

  return (
    <section ref={sectionRef} className="details-container">
      <div className="sticky-viewport">

        {/* Parallax Backgrounds */}
        <motion.div
          className="parallax-bg"
          style={{ backgroundImage: `url(${exteriorImg})`, scale: scale1, opacity: opacity1 }}
        />
        <motion.div
          className="parallax-bg"
          style={{ backgroundImage: `url(${interiorImg})`, scale: scale2, opacity: opacity2 }}
        />
        <motion.div
          className="parallax-bg"
          style={{ backgroundImage: `url(${detailImg})`, scale: scale3, opacity: opacity3 }}
        />

        {/* Gradient Overlay for better text readability and cinematic depth */}
        <div className="details-overlay"></div>

        {/* Narrative Feature Blocks */}
        <FeatureBlock
          progress={smoothProgress}
          range={[0.0, 0.15, 0.30]}
          subtitle="Engineering"
          title="The Silhouette of Power"
          body="A seamless 'Waft Line' creates a shimmering profile, minimizing drag to an unprecedented 0.25cd coefficient."
        />

        <FeatureBlock
          progress={smoothProgress}
          range={[0.35, 0.5, 0.65]}
          subtitle="The Cabin"
          title="A Bespoke Sanctuary"
          body="Meticulously hand-placing 4,796 laser-etched stars to create a celestial canopy unlike any other. Silence perfected."
        />

        <FeatureBlock
          progress={smoothProgress}
          range={[0.70, 0.85, 1.0]}
          subtitle="The Commission"
          title="Unbounded Luxury"
          body="530km range. 900Nm torque. 0-100 in 4.5 seconds. A true masterpiece of technical elegance."
          isPrice
        />

      </div>
    </section>
  );
};

// Reusable component to handle entry/exit animations for narrative blocks
const FeatureBlock = ({ progress, range, subtitle, title, body, isPrice }) => {
  // range = [start fade in, fully visible, start fade out]
  const opacity = useTransform(progress,
    [range[0], range[0] + 0.05, range[2] - 0.05, range[2]],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress,
    [range[0], range[0] + 0.05, range[2] - 0.05, range[2]],
    [50, 0, 0, -50]
  );
  const scale = useTransform(progress,
    [range[0], range[0] + 0.05, range[2] - 0.05, range[2]],
    [0.95, 1, 1, 1.05]
  );

  return (
    <motion.div className="story-block" style={{ opacity, y, scale }}>
      <p className="story-subtext">{subtitle}</p>
      {isPrice ? <h2 className="story-price">{title}</h2> : <h2 className="story-heading">{title}</h2>}
      <p className="story-paragraph">{body}</p>
      {isPrice && (
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(138, 99, 210, 0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Configure Yours
        </motion.button>
      )}
    </motion.div>
  );
};

export default DetailsSection;
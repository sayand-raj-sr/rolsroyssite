import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import './HeroSection.css';

const FRAME_COUNT = 240;

const currentFrame = (index) => 
  `/images/hero/ezgif-frame-${index.toString().padStart(3, '0')}.png`;

const HeroSection = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);

  // Preload images
  useEffect(() => {
    let isMounted = true;
    const preloadImages = () => {
      const imgArray = [];
      let loadedCount = 0;
      
      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
           loadedCount++;
           if (loadedCount === 1 && isMounted) {
             // draw first available frame initially
             drawFrame(1, imgArray);
           }
        };
        imgArray.push(img);
      }
      if (isMounted) setImages(imgArray);
    };

    preloadImages();
    return () => {
      isMounted = false;
    };
  }, []);

  const drawFrame = (frameIndex, imgArray = images) => {
    if (imgArray.length === 0 || !canvasRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = imgArray[frameIndex - 1];
    
    if (img && img.complete) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(
      FRAME_COUNT - 1, 
      Math.max(0, Math.floor(latest * FRAME_COUNT))
    ) + 1;
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  useEffect(() => {
    const handleResize = () => {
      if (images.length > 0) {
        const latest = scrollYProgress.get();
        const frameIndex = Math.min(
          FRAME_COUNT - 1, 
          Math.max(0, Math.floor(latest * FRAME_COUNT))
        ) + 1;
        drawFrame(frameIndex);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, scrollYProgress]);

  // Transformed values for Feature Text Overlays
  const text1Opacity = useTransform(scrollYProgress, [0.02, 0.08, 0.18, 0.22], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.02, 0.08, 0.18, 0.22], [50, 0, 0, -50]);

  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.32, 0.45, 0.50], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.25, 0.32, 0.45, 0.50], [50, 0, 0, -50]);

  const text3Opacity = useTransform(scrollYProgress, [0.55, 0.62, 0.75, 0.80], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.55, 0.62, 0.75, 0.80], [50, 0, 0, -50]);

  const text4Opacity = useTransform(scrollYProgress, [0.82, 0.88, 0.96, 1], [0, 1, 1, 0]);
  const text4Y = useTransform(scrollYProgress, [0.82, 0.88, 0.96, 1], [50, 0, 0, -50]);

  // Final Rolls Royce logo fading in at the very end
  const titleOpacity = useTransform(scrollYProgress, [0.93, 1], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.93, 1], [20, 0]);

  return (
    <section ref={containerRef} className="hero-scroll-container">
      <div className="hero-sticky-viewport">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="overlay-gradient"></div>

        {/* Feature Text 1 */}
        <motion.div style={{ opacity: text1Opacity, y: text1Y }} className="feature-text feature-text-1">
          <h2>ELECTRIFIED PRESENCE</h2>
          <p>The dawn of a new era. Unapologetically Rolls-Royce.</p>
        </motion.div>

        {/* Feature Text 2 */}
        <motion.div style={{ opacity: text2Opacity, y: text2Y }} className="feature-text feature-text-2">
          <h2>AERODYNAMIC PURITY</h2>
          <p>The most aerodynamic Rolls-Royce ever created, slicing through the air with effortless grace.</p>
        </motion.div>

        {/* Feature Text 3 */}
        <motion.div style={{ opacity: text3Opacity, y: text3Y }} className="feature-text feature-text-3">
          <h2>MAGIC CARPET RIDE</h2>
          <p>Planar suspension system ensures unparalleled ride quality. Whispering silence.</p>
        </motion.div>

        {/* Feature Text 4 */}
        <motion.div style={{ opacity: text4Opacity, y: text4Y }} className="feature-text feature-text-4">
          <h2>THE 2026 SPECTRE</h2>
          <p>Inspiring greatness, unbounded by limits.</p>
        </motion.div>

        <motion.div style={{ opacity: titleOpacity, y: titleY }} className="final-hero-title">
          <p className="hero-subtitle">INSPIRING GREATNESS</p>
          <h1 className="hero-title">ROLLS-ROYCE</h1>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

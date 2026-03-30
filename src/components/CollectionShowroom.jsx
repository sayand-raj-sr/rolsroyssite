import React from 'react';
import { motion } from 'framer-motion';
import './CollectionShowroom.css';

// Using established, high-quality Rolls-Royce identifiers to prevent mixed results
const rrImages = [
  'https://www.bollywood.com/wp-content/uploads/2022/09/maxresdefault-61.jpg', // Spectre
  'https://images.ctfassets.net/lmiyf1b7ib63/5rollsroycephanto-image/95f418b02d5e7c232389f9fe7f59fd3e/5rollsroycephanto-image.jpeg', // Phantom
  'https://img.freepik.com/premium-photo/rolls-royce-ghost-2025-rolls-royce-ghost-2025-new_1097779-6157.jpg', // Local Generated Ghost
  'https://i.pinimg.com/736x/c0/94/fa/c094fa8eae06791b13a40563aa14df49.jpg', // Local Generated Cullinan
  'https://i.pinimg.com/1200x/d6/8b/12/d68b129acb1dab451194097ac708d21b.jpg', // Spectre Exterior
  'https://i.pinimg.com/736x/4f/dc/eb/4fdceb19982c1994d47f66aa79a8ceb8.jpg', // Interior Starlight
  'https://i.pinimg.com/1200x/1f/d2/18/1fd21887888dc932df11b4582981ec4b.jpg', // La Rose Noire
  'https://i.pinimg.com/1200x/87/49/d4/8749d4936c08a74f786094a0e50979b2.jpg', // Boat Tail
  'https://i.pinimg.com/736x/99/70/e1/9970e1769cdf310f514c4e3d703bd47a.jpg'  // Wraith
];

const models = [
  { name: 'Phantom Series II', sub: 'The pinnacle of luxury engineering.', img: rrImages[1] },
  { name: 'Spectre Luna', sub: 'The celestial evolution of electric power.', img: rrImages[0] },
  { name: 'Ghost Prism', sub: 'Subtle mastery in silver and light.', img: rrImages[2] },
  { name: 'Cullinan Black Badge', sub: 'The darker side of luxury adventure.', img: rrImages[3] },
  { name: 'La Rose Noire Droptail', sub: 'A bespoke masterpiece of passion.', img: rrImages[6] },
  { name: 'Amethyst Droptail', sub: 'A gemstone of the open road.', img: rrImages[5] },
  { name: 'Arcadia Droptail', sub: 'Pursuit of peaceful, architectural purity.', img: rrImages[4] },
  { name: 'Boat Tail III', sub: 'Floating on a sea of bespoke craftsmanship.', img: rrImages[7] },
  { name: 'Black Badge Ghost', sub: 'Unfiltered, powerful, and mysterious.', img: rrImages[2] },
  { name: 'Black Badge Cullinan', sub: 'Commanding the night with dark elegance.', img: rrImages[3] },
  { name: 'Wraith Black Badge', sub: 'The most powerful Rolls-Royce ever.', img: rrImages[8] },
  { name: 'Dawn Silver Bullet', sub: 'Open-air nostalgia of the roadster era.', img: rrImages[5] },
  { name: 'Phantom Extended', sub: 'Unrivalled space for the masters.', img: rrImages[1] },
  { name: 'Ghost Extended', sub: 'A more expansive Ghost experience.', img: rrImages[2] },
  { name: 'Cullinan Series II', sub: 'Reimagining the ultimate SUV.', img: rrImages[3] },
  { name: 'Phantom Drophead', sub: 'Effortless open-top grand touring.', img: rrImages[1] },
  { name: 'Wraith Kryptos', sub: 'A cryptic message hidden in plain sight.', img: rrImages[8] },
  { name: 'Silver Ghost (1906)', sub: 'The legend that started it all.', img: rrImages[4] },
  { name: 'Phantom III V12', sub: 'The monumental power of the thirties.', img: rrImages[1] },
  { name: 'Silver Shadow', sub: 'The beginning of a new luxury era.', img: rrImages[2] },
  { name: 'Corniche V', sub: 'The sun-drenched icon of the Rivera.', img: rrImages[5] },
  { name: 'Camargue', sub: 'An architecturally unique statement.', img: rrImages[4] },
  { name: 'Silver Seraph', sub: 'Modern luxury meets classic spirit.', img: rrImages[2] },
  { name: 'Black Badge Dawn', sub: 'Experience the night in an open-top.', img: rrImages[5] },
  { name: 'Phantom VI', sub: 'The ultimate choice of state and royalty.', img: rrImages[1] },
  { name: 'Silver Cloud III', sub: 'The epitome of post-war grandeur.', img: rrImages[4] },
  { name: 'Silver Spur', sub: 'The cornerstone of executive travel.', img: rrImages[2] },
  { name: 'Park Ward', sub: 'Bespoke elegance for the discerning.', img: rrImages[1] },
  { name: 'Wraith Eagle VIII', sub: 'Tribute to the first non-stop flight.', img: rrImages[8] },
  { name: 'Duo-Tone Phantom', sub: 'The art of contrasting luxury.', img: rrImages[1] },
  { name: 'Starlight Spectre', sub: 'Lighting the way to an electric future.', img: rrImages[0] },
  { name: 'Bespoke Cullinan', sub: 'Individuality in every terrain.', img: rrImages[3] }
];

const CollectionShowroom = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <motion.section
      id="collections"
      className="showroom-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="showroom-header">
        <motion.p className="showroom-subtitle">THE FULL ROLLS-ROYCE COLLECTION</motion.p>
        <motion.h2 className="showroom-title">A LEGACY OF EXCELLENCE</motion.h2>
      </div>

      <div className="showroom-grid">
        {models.map((model, index) => (
          <motion.div
            key={model.name + index}
            className="showroom-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (index % 4) * 0.1 }}
          >
            <div className="showroom-card-img-wrapper">
              <img
                src={model.img}
                alt={model.name}
                className="showroom-card-img"
                onError={(e) => { e.target.src = 'https://tse2.mm.bing.net/th/id/OIP.d7qL6t72Q8u1I9_t7Q4IqwHaE8?rs=1&pid=ImgDetMain'; }}
              />
              <div className="showroom-card-overlay"></div>
            </div>
            <div className="showroom-card-content">
              <h3>{model.name}</h3>
              <p>{model.sub}</p>
              <button className="showroom-explore-btn">VIEW BESPOKE</button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CollectionShowroom;

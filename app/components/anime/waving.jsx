import { motion } from 'framer-motion' // Added missing import

// Waving Background with more realistic waves
export const WavingBackground = () => { // Added export keyword
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute w-[200%] opacity-10"
          style={{
            height: `${(3-i) * 15 + 20}px`,
            bottom: `${i * 20 + 5}%`,
            left: '-50%',
            backgroundColor: i % 2 === 0 ? '#8ECAE6' : '#FFB5A7',
            borderRadius: '50%',
            filter: `blur(${i+1}px)`
          }}
          animate={{
            x: [0, 30, -30, 0],
            scaleX: [1, 1.1, 0.9, 1],
            scaleY: [1, 1.3, 0.7, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

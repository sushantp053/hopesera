import { motion } from 'framer-motion'

// DNA Helix Component - Enhanced for better visual effect
export const DNAHelix = () => {
  return (
    <div className="absolute left-5 top-1/4 h-64 w-20 opacity-10 pointer-events-none z-0 overflow-hidden">
      <motion.div 
        className="absolute h-full w-[2px] bg-rose-300 left-4"
        animate={{ 
          scaleY: [0.7, 1, 0.7],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute h-full w-[2px] bg-rose-300 right-4" 
        animate={{ 
          scaleY: [1, 0.7, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {[...Array(10)].map((_, i) => (
        <motion.div 
          key={`dna-strand-${i}`}
          className="absolute w-full h-[2px]"
          style={{ 
            top: `${i * 20 + 10}px`, 
            background: i % 2 === 0 ? 'rgb(249 168 212)' : 'rgb(216 180 254)'
          }}
          animate={{ 
            rotateY: [0, 180, 360],
            opacity: [0.6, 1, 0.6],
            width: ['100%', '90%', '100%']
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.2 % 1
          }}
        />
      ))}
    </div>
  );
};
import { motion } from 'framer-motion'  // Added missing import

// Floating Cells Component - Enhanced with better nucleus and movement
export const FloatingCells = () => {  // Added export keyword
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(12)].map((_, i) => {
        const size = Math.random() * 20 + 8;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 10;
        const xPos = Math.random() * 100;
        const tailLength = size * 0.8;
        
        return (
          <motion.div 
            key={`cell-${i}`}
            className="absolute"
            style={{
              left: `${xPos}%`,
              top: `${Math.random() * 100}%`,
              width: size,
              height: size,
              borderRadius: '50%',
              background: `radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1), rgba(226, 232, 240, 0.3))`,
              boxShadow: 'inset 0 0 4px rgba(255,255,255,0.6)',
              zIndex: 0
            }}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay
            }}
          >
            {/* Cell nucleus */}
            <motion.div
              className="absolute rounded-full bg-pink-200/30"
              style={{
                width: size * 0.4,
                height: size * 0.4,
                top: '30%',
                left: '30%',
              }}
              animate={{
                scale: [1, 1.2, 0.9, 1],
              }}
              transition={{
                duration: duration / 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Cell Tail - gives it sperm-like appearance */}
            <motion.div 
              className="absolute top-1/2 -left-full"
              style={{
                height: `${size * 0.3}px`, 
                width: `${tailLength}px`,
                background: 'linear-gradient(to left, rgba(226, 232, 240, 0.3), rgba(226, 232, 240, 0))' 
              }}
              animate={{
                scaleX: [1, 0.8, 1],
                rotateZ: [0, 10, -10, 0]
              }}
              transition={{
                duration: duration / 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

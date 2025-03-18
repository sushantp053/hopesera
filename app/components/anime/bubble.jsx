import { motion } from "framer-motion";
// Bubbles Animation Component - Enhanced with realistic bubble details
export const Bubbles = () => {
  return (
    <div className="absolute bottom-0 w-full h-40 pointer-events-none z-0 overflow-hidden">
      {[...Array(15)].map((_, i) => {
        const size = Math.random() * 10 + 5;
        const left = Math.random() * 100;
        const duration = Math.random() * 5 + 8;
        const delay = Math.random() * 8;
        const hue = Math.random() * 30 + 180; // Blue to cyan hues
        
        return (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              bottom: -10,
              border: `1px solid hsla(${hue}, 80%, 80%, 0.3)`,
              background: `radial-gradient(circle at 30% 30%, hsla(${hue}, 100%, 95%, 0.2), hsla(${hue}, 100%, 85%, 0.1))`
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: -200,
              opacity: [0, 0.5, 0],
              x: left > 50 ? [0, 10, -5, 0] : [0, -10, 5, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeOut"
            }}
          >
            {/* Bubble highlight */}
            <div 
              className="absolute rounded-full bg-white/40" 
              style={{
                width: size * 0.3,
                height: size * 0.3,
                top: '20%',
                left: '20%',
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

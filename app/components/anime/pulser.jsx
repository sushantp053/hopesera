import { motion } from 'framer-motion' // Added missing import

// New Pulsar Effect for heartbeat-like effect
export const PulsarEffect = () => { // Added export keyword
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
      <motion.div
        className="w-[500px] h-[500px] rounded-full bg-pink-100/5"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1
        }}
      />
      <motion.div
        className="absolute inset-0 w-[400px] h-[400px] rounded-full bg-indigo-100/5"
        animate={{
          scale: [0.8, 1.1, 0.8],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
          repeatDelay: 1
        }}
      />
    </div>
  );
};
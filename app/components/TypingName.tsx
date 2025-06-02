'use client';

import { motion } from 'framer-motion';
import { config } from '../config';

export default function TypingName() {
  const letters = config.name.split('');

  return (
    <div className="relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent2/20 blur-3xl rounded-full" />
      
      <div className="flex relative z-10">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-3xl font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0,
              textShadow: [
                "0 0 7px rgba(99, 102, 241, 0.5)",
                "0 0 10px rgba(99, 102, 241, 0.7)",
                "0 0 7px rgba(99, 102, 241, 0.5)"
              ]
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
        <motion.span
          className="text-3xl font-bold text-accent"
          animate={{ 
            opacity: [0, 1, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          |
        </motion.span>
      </div>
    </div>
  );
} 
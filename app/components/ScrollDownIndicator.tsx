'use client';

import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export default function ScrollDownIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-accent"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 1,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <FiChevronDown className="w-8 h-8 animate-bounce" />
    </motion.div>
  );
} 
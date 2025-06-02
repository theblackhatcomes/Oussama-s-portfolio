'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiUsers } from 'react-icons/fi';

export default function VisitorCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitors');
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Failed to update visitor count:', error);
      }
    };

    updateVisitorCount();
  }, []);

  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/20 shadow-glow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 text-accent">
        <FiUsers className="w-5 h-5" />
        <span className="font-medium">{count.toLocaleString()} visitors</span>
      </div>
    </motion.div>
  );
} 
'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-secondary/50 p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-glow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl mb-4 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
        <Icon />
      </div>
      <h3 className="text-xl font-bold mb-2 text-accent">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
} 
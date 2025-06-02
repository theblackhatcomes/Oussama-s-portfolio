'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import { useState, useEffect } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const [stars, setStars] = useState(0);
  const [isStarred, setIsStarred] = useState(false);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch('/api/projects/stars');
        const projects = await response.json();
        const project = projects.find((p: any) => p.title === title);
        if (project) {
          setStars(project.stars);
        }
      } catch (error) {
        console.error('Failed to fetch stars:', error);
      }
    };

    fetchStars();
  }, [title]);

  const handleStar = async () => {
    if (isStarred) return;
    
    try {
      const response = await fetch('/api/projects/stars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });
      
      const data = await response.json();
      setStars(data.stars);
      setIsStarred(true);
    } catch (error) {
      console.error('Failed to update stars:', error);
    }
  };

  return (
    <motion.div
      className="bg-secondary/50 rounded-lg overflow-hidden border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-glow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-accent">{title}</h3>
          <motion.button
            onClick={handleStar}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-all duration-300 ${
              isStarred
                ? 'bg-accent/20 text-accent'
                : 'bg-secondary/50 text-gray-400 hover:bg-accent/10 hover:text-accent'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiStar className={isStarred ? 'fill-accent' : ''} />
            <span>{stars}</span>
          </motion.button>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent2 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent2 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiExternalLink className="w-6 h-6" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
} 
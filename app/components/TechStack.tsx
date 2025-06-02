'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FiFilter, FiX } from 'react-icons/fi';

interface TechItem {
  name: string;
  logo: string;
  url: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'language';
  level: number; // 1-5
  description: string;
}

const techStack: TechItem[] = [
  {
    name: 'JavaScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    category: 'language',
    level: 5,
    description: 'Advanced proficiency in modern JavaScript, ES6+ features, and functional programming',
  },
  {
    name: 'Python',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
    url: 'https://www.python.org/',
    category: 'language',
    level: 4,
    description: 'Strong experience in Python development, data structures, and algorithms',
  },
  {
    name: 'React',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    url: 'https://reactjs.org/',
    category: 'frontend',
    level: 5,
    description: 'Expert in React development, hooks, and state management',
  },
  {
    name: 'Next.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png',
    url: 'https://nextjs.org/',
    category: 'frontend',
    level: 4,
    description: 'Proficient in Next.js, server-side rendering, and API routes',
  },
  {
    name: 'Node.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
    url: 'https://nodejs.org/',
    category: 'backend',
    level: 4,
    description: 'Experience in building scalable Node.js applications and REST APIs',
  },
  {
    name: 'TypeScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
    url: 'https://www.typescriptlang.org/',
    category: 'language',
    level: 4,
    description: 'Strong TypeScript skills with type safety and interfaces',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png',
    url: 'https://tailwindcss.com/',
    category: 'frontend',
    level: 5,
    description: 'Expert in utility-first CSS and responsive design',
  },
  {
    name: 'MongoDB',
    logo: 'https://logotyp.us/file/mongodb.svg',
    url: 'https://www.mongodb.com/',
    category: 'database',
    level: 3,
    description: 'Experience in MongoDB database design and querying',
  },
  {
    name: 'Git',
    logo: 'https://i.pinimg.com/736x/a7/f5/78/a7f57841deeefc209c764244c7ab93a1.jpg',
    url: 'https://git-scm.com/',
    category: 'tools',
    level: 5,
    description: 'Proficient in version control and collaborative development',
  },
];

const categories = ['all', 'frontend', 'backend', 'database', 'tools', 'language'] as const;

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('all');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const handleImageError = (techName: string) => {
    setImageErrors(prev => ({ ...prev, [techName]: true }));
  };

  const filteredTechStack = selectedCategory === 'all'
    ? techStack
    : techStack.filter(tech => tech.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-accent text-white'
                : 'bg-secondary/50 text-gray-300 hover:bg-secondary/80'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <AnimatePresence>
          {filteredTechStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative"
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
            >
              <motion.a
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                whileHover={{ y: -10 }}
              >
                <div className="relative w-24 h-24 mb-4 rounded-full bg-secondary/50 p-4 group-hover:bg-secondary/80 transition-all duration-300 border border-accent/20 group-hover:border-accent/50 group-hover:shadow-glow">
                  {!imageErrors[tech.name] ? (
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      fill
                      className="object-contain p-2"
                      onError={() => handleImageError(tech.name)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-accent">
                      {tech.name[0]}
                    </div>
                  )}
                </div>
                <span className="text-lg font-medium text-center">{tech.name}</span>
                
                {/* Skill Level Indicator */}
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < tech.level ? 'bg-accent' : 'bg-secondary/50'
                      }`}
                    />
                  ))}
                </div>
              </motion.a>

              {/* Tooltip */}
              {hoveredTech === tech.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 p-3 bg-secondary/90 backdrop-blur-sm rounded-lg shadow-glow border border-accent/20 w-48 z-10"
                >
                  <p className="text-sm text-gray-300">{tech.description}</p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-secondary/90 border-r border-b border-accent/20" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
} 
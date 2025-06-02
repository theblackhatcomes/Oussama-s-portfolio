'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiCode, FiServer, FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import Section from './components/Section';
import ServiceCard from './components/ServiceCard';
import ProjectCard from './components/ProjectCard';
import TechStack from './components/TechStack';
import TypingName from './components/TypingName';
import FloatingParticles from './components/FloatingParticles';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ScrollDownIndicator from './components/ScrollDownIndicator';
import { config } from './config';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-dark text-light relative overflow-hidden">
      <CustomCursor />
      <ScrollProgress />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-radial from-accent/10 to-transparent opacity-50 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://media.licdn.com/dms/image/v2/D4E03AQFX3wSWAVDgdw/profile-displayphoto-shrink_800_800/B4EZaSVE2lHkAc-/0/1746211721737?e=1754524800&v=beta&t=kAJTJln3ng5ayGqK6OYsccKsbTjcGeduQWnLuSP8gmo')] bg-cover bg-center opacity-10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-dark/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent animate-gradient" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-primary/90 backdrop-blur-lg z-50 border-b border-accent/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TypingName />
            </motion.div>
            <div className="flex space-x-8">
              {['About', 'Services', 'Projects', 'Tech Stack'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-accent transition-colors font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-6xl font-bold mb-6 font-display bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {config.name}
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {config.title}
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center md:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-gradient-to-r from-accent to-accent2 hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub className="inline-block mr-2" />
                  GitHub
                </motion.a>
                <motion.a
                  href={config.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-gradient-to-r from-accent to-accent2 hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiLinkedin className="inline-block mr-2" />
                  LinkedIn
                </motion.a>
                <motion.a
                  href="mailto:oussamahmoutecrypto@gmail.com"
                  className="btn-primary bg-gradient-to-r from-accent to-accent2 hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiMail className="inline-block mr-2" />
                  Contact
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/50 shadow-glow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <Image
                src="https://media.licdn.com/dms/image/v2/D4E03AQFX3wSWAVDgdw/profile-displayphoto-shrink_800_800/B4EZaSVE2lHkAc-/0/1746211721737?e=1754524800&v=beta&t=kAJTJln3ng5ayGqK6OYsccKsbTjcGeduQWnLuSP8gmo"
                alt="Oussama Hmoute"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
        <ScrollDownIndicator />
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-300 mb-8">
            I'm a passionate Software engineering student with expertise in building modern web applications.
            I specialize in creating responsive, user-friendly interfaces and robust backend systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-secondary/50 p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors duration-300"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold mb-4 text-accent">Education</h3>
              <p className="text-gray-300">I'm a passionate software engineering student in the national school of applied science of Al Hoceima in Morocco, with a competitive mindset and a determination to make the impossible</p>
            </motion.div>
            <motion.div 
              className="bg-secondary/50 p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors duration-300"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold mb-4 text-accent">Experience</h3>
              <p className="text-gray-300">Your experience details here</p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" title="Services">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={FiCode}
            title="Web Development"
            description="Building modern, responsive websites and web applications using the latest technologies."
          />
          <ServiceCard
            icon={FiServer}
            title="Backend Development"
            description="Creating robust and scalable backend systems with Node.js, Python, and more."
          />
          <ServiceCard
            icon={FiSearch}
            title="SEO Optimization"
            description="Improving website visibility and ranking through effective SEO strategies."
          />
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Graphy"
            description="Graphy is a versatile and lightweight graph visualization tool designed to help users easily create, analyze, and visualize various types of graphs and functions. Built using Python, this project focuses on intuitive interactivity, customizable styles, and efficient graph rendering."
            image="https://i.sstatic.net/ASFIj.png"
            tags={['Matplotlib', 'sympy', 'Tkinter']}
            githubUrl="https://github.com/theblackhatcomes/Graphy"
            liveUrl="https://example.com"
          />
          <ProjectCard
            title="TradePocket"
            description="A Revolutionary Real-Time Trading Platform! A cutting-edge trading interface that combines professional-grade analytics with an intuitive user experience."
            image="https://images.contentstack.io/v3/assets/bltc23b87e0fef43b66/blt72fd7e2f49314810/66a2cbed96250195d7b51cb9/TT1763_LP03_PLAT_01-noshadow.png?format=pjpg&auto=webp&quality=80&width=1000&disable=upscale"
            tags={['Next.js', 'TypeScript', 'Tailwind']}
            githubUrl="https://github.com"
            liveUrl="https://example.com"
          />
          <ProjectCard
            title="ScanMvP"
            description=" ScanMvP is a powerful vulnerability scanner I built using Python, designed to detect open ports, identify services, and assess vulnerabilities across multiple protocols (HTTP, HTTPS, SSH, FTP). It features WiFi network analysis, an intuitive web interface, and generates detailed HTML/PDF reports. Tested on testphp.vulnweb.com (ports 80 & 443), it effectively uncovered services, web flaws, and misconfigurations—proving its value for both professionals and learners."
            image=" https://hackersonlineclub.com/wp-content/uploads/2022/09/Vulnerability-Scanning-Network-750x500.webp"
            tags={['Python', 'Django', 'PostgreSQL']}
            githubUrl="https://github.com"
            liveUrl="https://example.com"
          />
        </div>
      </Section>

      {/* Tech Stack Section */}
      <Section id="tech-stack" title="Tech Stack">
        <TechStack />
      </Section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-8 border-t border-accent/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Oussama Hmoute. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
} 
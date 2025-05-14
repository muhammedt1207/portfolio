"use client";

import { motion } from 'framer-motion';
import { 
  Database, 
  FileJson, 
  Container, 
  Server, 
  Layers, 
  Code2, 
  Upload, 
  Cpu, 
  Globe, 
  Network,
} from 'lucide-react';

const techIcons = [
  { name: 'Node.js', icon: Server, color: '#68a063' },
  { name: 'TypeScript', icon: FileJson, color: '#3178c6' },
  { name: 'Docker', icon: Container, color: '#2496ed' },
  { name: 'Kubernetes', icon: Network, color: '#326ce5' },
  { name: 'MongoDB', icon: Database, color: '#47a248' },
  { name: 'PostgreSQL', icon: Layers, color: '#336791' },
  { name: 'Next.js', icon: Globe, color: '#000000' },
  { name: 'Nest.js', icon: Upload, color: '#e0234e' },
  { name: 'React', icon: Code2, color: '#61dafb' },
  { name: 'GraphQL', icon: Cpu, color: '#e535ab' }
];

export default function TechStack() {
  const firstRowIcons = [...techIcons.slice(0, 5), ...techIcons.slice(0, 5), ...techIcons.slice(0, 5)];
  const secondRowIcons = [...techIcons.slice(5), ...techIcons.slice(5), ...techIcons.slice(5)];

  const leftToRightVariants = {
    animate: {
      x: [50, -1535],
      transition: {
        x: {
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  const rightToLeftVariants = {
    animate: {
      x: [-1535, 100],
      transition: {
        x: {
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="py-16 px-[200px] bg-white dark:bg-black overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
        Tech Stack
      </h2>

      <div className="flex flex-col gap-12">
        {/* First Row - Left to Right */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8 px-4"
            variants={leftToRightVariants}
            animate="animate"
          >
            {firstRowIcons.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={`row1-${tech.name}-${index}`}
                  className="flex-shrink-0 w-24 h-24 flex flex-col items-center justify-center"
                >
                  <IconComponent
                    size={40}
                    className="text-gray-700 dark:text-gray-300"
                    style={{ color: tech.color }}
                  />
                  <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8 px-4"
            variants={rightToLeftVariants}
            animate="animate"
          >
            {secondRowIcons.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={`row2-${tech.name}-${index}`}
                  className="flex-shrink-0 w-24 h-24 flex flex-col items-center justify-center"
                >
                  <IconComponent
                    size={40}
                    className="text-gray-700 dark:text-gray-300"
                    style={{ color: tech.color }}
                  />
                  <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion, useScroll, Variants } from 'framer-motion';
import { useRef } from 'react';
import { BackgroundBeams } from './ui/background-beams';

interface TimelineItem {
  type: 'education' | 'bootcamp' | 'work';
  title: string;
  institution: string;
  period: string;
  description?: string;
  isDropout?: boolean;
}

export default function Journey() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Shattering animation variants for dropout section
  const shatterVariants: Variants = {
    initial: { opacity: 1, scale: 1 },
    shatter: {
      opacity: [1, 0.7, 0.5, 0],
      scale: [1, 1.1, 1.2, 1.3],
      rotate: [0, 10, -10, 20],
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const timelineItems: TimelineItem[] = [
    {
      type: 'education',
      title: 'High School ',
      institution: 'TIM High School',
      period: '2018 - 2020',
      description: 'Completed secondary education with a focus on science and mathematics.'
    },
    {
      type: 'education',
      title: 'Bachelor of Commerce',
      institution: 'Ignou University',
      period: '2021 - Dropped Out',
      description: 'Pursued Commerce degree but did not complete the program.',
      isDropout: true
    },
    {
      type: 'bootcamp',
      title: 'Full Stack Web Development Bootcamp',
      institution: 'Brototype Calicut',
      period: '2023 - 2024',
      description: 'Intensive program covering modern web development technologies and practices.'
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      institution: 'Script Studio PVT Ltd',
      period: '2025 - Present',
      description: 'Leading development of scalable web applications using cutting-edge technologies.'
    }
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-black py-16 relative" ref={ref}>
      
      <div className="container mx-auto relative">
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
          My Journey
        </h2>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Center Line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-700 origin-top"
            style={{
              height: '100%',
              scaleY: scrollYProgress
            }}
          />

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`w-6 h-6 rounded-full absolute left-1/2 transform -translate-x-1/2 
                ${item.isDropout ? 'bg-red-500' : 'bg-blue-500'}`} 
              />

              {/* Timeline Item */}
              <motion.div 
                variants={item.isDropout ? shatterVariants : undefined}
                whileHover={item.isDropout ? "shatter" : undefined}
                className={`w-1/2 relative 
                  ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}
                  ${item.isDropout ? ' p-4 rounded-lg border-l-4 border-red-500' : ''}`}
              >
                <h3 className={`text-2xl font-semibold 
                  ${item.isDropout ? 'text-red-700 dark:text-red-400' : 'text-black dark:text-white'}`}>
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {item.institution}
                </p>
                <p className={`text-md 
                  ${item.isDropout ? 'text-red-600 dark:text-red-300' : 'text-gray-600 dark:text-gray-400'}`}>
                  {item.period}
                </p>
                {item.description && (
                  <p className={`mt-2 text-sm 
                    ${item.isDropout ? 'text-red-500 dark:text-red-300' : 'text-gray-500 dark:text-gray-500'}`}>
                    {item.description}
                  </p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <BackgroundBeams/>
    </section>
  );
}
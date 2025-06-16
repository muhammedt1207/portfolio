"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { HeroHighlight } from './ui/hero-highlight';

export default function Header() {
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/yourusername',
      color: 'text-black dark:text-white hover:text-gray-700' 
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/yourusername',
      color: 'text-blue-600 hover:text-blue-800' 
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/yourusername',
      color: 'text-blue-400 hover:text-blue-600' 
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/yourusername',
      color: 'text-pink-500 hover:text-pink-700' 
    }
  ];

  return (
  
      <HeroHighlight className='h-screen '>
    <header className="min-h-screen flex flex-col justify-center items-center text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="md:text-5xl text-3xl p-0 m-0 font-bold text-black dark:text-white">
          Hi, I&apos;m Muhammed T
        </h1>
        <p className="text-2xl text-gray-700 m-0 p-0 dark:text-gray-300">
         Full Stack Developer
        </p>
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-6">
          {socialLinks.map(({ icon: Icon, href, color }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${color} transition-colors duration-300`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <Icon size={32} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </header>
    </HeroHighlight>
  );
}
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 bg-white dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12"
      >
        {/* Profile Image */}
        <div className="w-64 h-64 relative">
          <Image 
            src="/images/profile.jpg" 
            alt="Your Profile" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-full shadow-lg"
          />
        </div>

        {/* About Description */}
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hello! I&apos;m a passionate software developer with expertise in full-stack development, 
            specializing in creating robust and scalable web applications. With a strong background 
            in modern web technologies, I love solving complex problems and building innovative 
            solutions that make a real-world impact.

            My journey in tech has been driven by curiosity, continuous learning, and a desire to 
            push the boundaries of what&apos;s possible with code. I thrive in collaborative environments 
            and am always excited to take on new challenges.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
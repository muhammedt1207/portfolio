"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubLink?: string;
  liveLink?: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management and payment integration.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      imageUrl: '/images/project-screenshots/ecommerce.jpg',
      githubLink: 'https://github.com/yourusername/ecommerce-project',
      liveLink: 'https://your-ecommerce-site.com'
    },
    {
      id: 2,
      title: 'AI Chatbot',
      description: 'Machine learning-powered chatbot with natural language processing capabilities.',
      technologies: ['React', 'Python', 'TensorFlow', 'WebSockets'],
      imageUrl: '/images/project-screenshots/chatbot.jpg',
      githubLink: 'https://github.com/yourusername/ai-chatbot',
      liveLink: 'https://your-chatbot-demo.com'
    },
    {
      id: 3,
      title: 'Real-Time Collaboration Tool',
      description: 'Collaborative workspace with live editing and team communication features.',
      technologies: ['Next.js', 'WebRTC', 'Socket.io', 'Docker'],
      imageUrl: '/images/project-screenshots/collaboration.jpg',
      githubLink: 'https://github.com/yourusername/collaboration-tool',
      liveLink: 'https://your-collab-tool.com'
    },
    {
      id: 4,
      title: 'Project Management App',
      description: 'Advanced project tracking and team collaboration platform.',
      technologies: ['React', 'Node.js', 'GraphQL', 'Prisma'],
      imageUrl: '/images/project-screenshots/project-management.jpg',
      githubLink: 'https://github.com/yourusername/project-management',
      liveLink: 'https://your-project-management-app.com'
    },
    {
      id: 5,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard with real-time data analytics and visualizations.',
      technologies: ['D3.js', 'React', 'Typescript', 'Tailwind'],
      imageUrl: '/images/project-screenshots/data-dashboard.jpg',
      githubLink: 'https://github.com/yourusername/data-dashboard',
      liveLink: 'https://your-data-dashboard.com'
    }
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Prevent vertical scrolling and enable horizontal scrolling
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    // Prevent default scroll behavior and enable custom horizontal scrolling
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section className="min-h-screen bg-white dark:bg-black py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
          My Blogs
        </h2>

        {/* Custom Horizontal Scroll Container */}
        <div className="relative overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 pb-4 overflow-x-scroll overflow-y-hidden scrollbar-hide"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none', // IE and Edge
              scrollbarWidth: 'none', // Firefox
            }}
          >
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-none w-[300px] md:w-[400px] scroll-ml-6 scroll-snap-start"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    {/* Project Image */}
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image 
                        src={project.imageUrl} 
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 2).map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="px-2 py-1 text-gray-600 dark:text-gray-400 text-xs">
                            +{project.technologies.length - 2} more
                          </span>
                        )}
                      </div>

                      {/* Project Links */}
                      <div className="flex space-x-3">
                        {project.githubLink && (
                          <a 
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black dark:text-white hover:text-blue-600 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.liveLink && (
                          <a 
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black dark:text-white hover:text-blue-600 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Project Modal (unchanged from previous version) */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-3xl font-bold mb-4 text-black dark:text-white">
              {selectedProject.title}
            </h3>
            <div className="relative w-full h-96 mb-6 overflow-hidden rounded-lg">
              <Image 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              {selectedProject.githubLink && (
                <a 
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-black dark:text-white hover:text-blue-600 transition-colors"
                >
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
              )}
              {selectedProject.liveLink && (
                <a 
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-black dark:text-white hover:text-blue-600 transition-colors"
                >
                  <ExternalLink size={24} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Optional: Add a scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-gray-500">
        <span>←</span>
        <span className="text-sm">Scroll horizontally</span>
        <span>→</span>
      </div>
    </section>
  );
}
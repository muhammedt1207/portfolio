"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      description: 'Your City, Your Country'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'your.email@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: '+1 (123) 456-7890'
    }
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-black py-16 relative">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Got a project in mind or just want to say hello? Feel free to reach out!
              I&apos;m always open to discussing new opportunities, collaborations, 
              or just having an interesting conversation.
            </p>

            {contactInfo.map(({ icon: Icon, title, description }) => (
              <div 
                key={title}
                className="flex items-center space-x-4"
              >
                <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full">
                  <Icon 
                    className="text-black dark:text-white" 
                    size={24} 
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                             bg-white dark:bg-gray-700 
                             text-gray-900 dark:text-white 
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                             transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                             bg-white dark:bg-gray-700 
                             text-gray-900 dark:text-white 
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                             transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                             bg-white dark:bg-gray-700 
                             text-gray-900 dark:text-white 
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                             transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center 
                           bg-blue-600 hover:bg-blue-700 
                           text-white font-bold py-3 px-4 rounded-md 
                           transition-colors duration-300 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                           group"
              >
                <Send 
                  className="mr-2 group-hover:animate-pulse" 
                  size={20} 
                />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
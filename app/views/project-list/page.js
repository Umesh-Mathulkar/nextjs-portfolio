'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/app/assets/data/projects';

const ProjectsPage = () => {
  return (
    <div className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-10 text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My Projects
        </motion.h2>
        <ul className="space-y-8">
          {projects.map((project, index) => (
            <motion.li
              key={index}
              className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-800 to-gray-900 text-white px-4 py-2 rounded hover:bg-gradient-to-l transition duration-300 ease-in-out">View Project</a>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsPage;

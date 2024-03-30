import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { projects } from '@/app/assets/data/projects';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { pillVariants, projectVariants } from '../Variants/ProjectVariants';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
 

  return (
    <motion.div
      className="rounded-xl overflow-hidden bg-gray-800 shadow-xl"
      variants={projectVariants}
      whileHover="whileHover"
    >
      <motion.div className="w-full h-64 relative" whileHover={{ scale: 1.1 }}>
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <div className="p-6">
        <motion.h3
          className="text-3xl font-bold mb-3 text-white"
          variants={projectVariants}
        >
          {project.title}
        </motion.h3>
        <p className="text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 justify-start mb-4">
          {project.skills.map((skill, skillIndex) => (
            <motion.div
              key={skillIndex}
              className="skill-pill"
              variants={pillVariants}
              whileHover="hover"
            >
              <span className="text-sm font-semibold px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-md">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
        <motion.a
          href={project.link}
          target="_blank"
          className="text-blue-500 hover:text-blue-400"
          whileHover={{ scale: 1.1 }}
        >
          View Project
        </motion.a>
      </div>
    </motion.div>
  );
};

const ShowMoreCard = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl overflow-hidden bg-gray-800 shadow-xl py-12">
      <h3 className="text-3xl font-bold mb-3 text-white">Show More</h3>
      <p className="text-gray-400 mb-4">Explore more projects...</p>
      <Link
        href="/views/project-list"
        className="text-blue-500 hover:text-blue-400 flex items-center"
        whileHover={{ scale: 1.1 }}
      >
        Explore <FaArrowAltCircleRight className="ml-2" />
      </Link>
    </div>
  );
};
const ProjectSection = () => {
  return (
    <motion.section
      className="project-section py-20"
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          <ShowMoreCard />
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;

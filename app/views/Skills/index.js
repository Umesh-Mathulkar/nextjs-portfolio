import React from "react";
import { motion } from "framer-motion";

import { backendSkills, frontendSkills, otherSkills } from "@/app/assets/data/skills";
import { containerVariants, skillVariants } from "../Variants/SkillVariants";

const SkillsSection = () => {
 



  return (
    <motion.section
      className="skills-section py-10"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-10 text-white"
          variants={containerVariants}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Frontend Technology
              </span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {frontendSkills.map(({ name, icon: Icon }, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 rounded-lg p-4 flex items-center justify-center h-28 cursor-pointer"
                  variants={skillVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  {Icon && <Icon className="text-4xl text-white" />}
                  <span className="text-lg font-bold text-white ml-2">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Backend Technology
              </span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {backendSkills.map(({ name, icon: Icon }, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 rounded-lg p-4 flex items-center justify-center h-28 cursor-pointer"
                  variants={skillVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  {Icon && <Icon className="text-4xl text-white" />}
                  <span className="text-lg font-bold text-white ml-2">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Other Tools
              </span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {otherSkills.map(({ name, icon: Icon }, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 rounded-lg p-4 flex items-center justify-center h-28 cursor-pointer"
                  variants={skillVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  {Icon && <Icon className="text-4xl text-white" />}
                  <span className="text-lg font-bold text-white ml-2">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
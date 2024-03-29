import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiMaterialui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

const SkillsSection = () => {
  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } },
  };

  const skillVariants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  const frontendSkills = [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Material UI", icon: SiMaterialui },
  ];

  const backendSkills = [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
  ];

  const otherSkills = [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Postman", icon: SiPostman },
  ];

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
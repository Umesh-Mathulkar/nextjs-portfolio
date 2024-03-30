import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { experienceData } from "@/app/assets/data/experience";
import { FaBriefcase, FaMapMarkerAlt, FaSchool } from "react-icons/fa";

const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.5 } }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const ExperienceSection = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  
    return (
      <motion.section
        className="experience-section py-5"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-5xl font-bold text-center mb-10 text-white "
            variants={containerVariants}
          >
            Experience
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                style={{ borderLeft: `5px solid ${colors[index % colors.length]}` }}
              >
                <div className="flex items-center mb-4">
                  {experience.type === "job" ? (
                    <FaBriefcase className="text-white mr-2" />
                  ) : (
                    <FaSchool className="text-white mr-2" />
                  )}
                  <h3 className="text-xl font-semibold text-white">{experience.company}</h3>
                </div>
                <p className="text-gray-300 mb-2 flex items-center">
                  <FaMapMarkerAlt className="text-gray-300 mr-2" />
                  {experience.position}
                </p>
                <p className="text-gray-300 mb-2 border-t pt-2">{experience.date}</p>
                <p className="text-gray-400 mb-4">{experience.description}</p>
                <ul className="list-disc list-inside text-gray-400">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx} className="mb-2">
                      <span className="text-green-300 mr-2">&#x25cf;</span>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  };
  
  export default ExperienceSection;
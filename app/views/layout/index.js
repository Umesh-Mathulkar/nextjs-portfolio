import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaBriefcase,
  FaEnvelope,
  FaExpeditedssl,
  FaCode,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Pill = ({ section, icon, onClick }) => {
  const [showName, setShowName] = useState(false);

  return (
    <motion.div
      className={`flex items-center border rounded-full bg-gray-800 w-[30px] ${
        showName ? "md:w-[100px]" : "md:w-[30px]"
      } p-2 text-center text-xs hover:bg-gray-900 cursor-pointer`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      onMouseEnter={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
    >
      {icon}
      {showName && <span className="ml-2 hidden md:block">{section}</span>}
    </motion.div>
  );
};

const Sections = [
  { name: "Home", icon: <FaHome />, id: "home" },
  { name: "About", icon: <FaUser />, id: "about" },
  { name: "Experience", icon: <FaCode />, id: "experience" },
  { name: "Skills", icon: <FaLaptopCode />, id: "skills" },
  { name: "Projects", icon: <FaBriefcase />, id: "projects" },
  { name: "Contact", icon: <FaEnvelope />, id: "contact" },
];

const SideNav = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center relative">
      <div className="w-[2px] md:bg-gray-900 md:border border-gray-600 shadow-lg absolute left-1/2 h-full"></div>
      <div className="flex flex-col items-center justify-center w-full h-full md:p-4">
        {Sections.map(({ name, icon, id }, index) => (
          <motion.div
            key={index}
            className="p-1 my-4 flex items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: index * 0.1,
            }}
          >
            <div className="w-[70px] h-[70px] flex items-center justify-end md:justify-center relative left-1/2 -translate-x-1/2">
              <Pill
                section={name}
                icon={icon}
                onClick={() => scrollToSection(id)}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;

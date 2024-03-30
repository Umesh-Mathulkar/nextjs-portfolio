import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import contactData from "@/app/assets/data/contact";


const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.4, duration: 0.6 },
  },
};

const ContactSection = () => {
  return (
    <motion.section
      className="contact-section py-16 bg-gray-900 rounded-xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-10 text-white"
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col"
            variants={itemVariants}
          >
            <FaEnvelope className="text-white mb-2" size={30} />
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400">{contactData.email}</p>
          </motion.div>
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col"
            variants={itemVariants}
          >
            <FaPhone className="text-white mb-2" size={30} />
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-400">{contactData.phone}</p>
          </motion.div>
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col"
            variants={itemVariants}
          >
            <FaMapMarkerAlt className="text-white mb-2" size={30} />
            <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-400">{contactData.location}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;

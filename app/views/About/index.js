import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import MyPic from '@/app/assets/images/mypic.jpg';
const AboutSection = () => {
  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } }
  };

  const imageVariants = {
    initial: { scale: 0 },
    animate: { scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } }
  };

  return (
    <motion.section
      className="about-section py-20"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 text-white"
          variants={containerVariants}
        >
          About Me
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center -mx-4">
          <motion.div
            className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0"
            variants={imageVariants}
          >
            <Image
              className="rounded-full shadow-lg"
              src={MyPic}
              alt="Umesh Mathulkar"
            />
          </motion.div>
          <div className="w-full lg:w-2/3 px-4">
            <div className="leading-relaxed text-lg space-y-6 text-white">
              <p>
                Hi, I'm Umesh Mathulkar, a passionate Full Stack Web Developer with a knack for creating dynamic and user-friendly web applications. With a solid foundation in both front-end and back-end technologies, I aim to bridge the gap between user experience and functional design.
              </p>
              <p>
                I hold a Bachelor of Technology degree from Government College of Engineering, Jalgaon, and have completed a Full Stack Web Development Program certification. My journey in web development is marked by continuous learning and applying the latest technologies to solve real-world problems.
              </p>
              {/* Add more paragraphs as needed */}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;

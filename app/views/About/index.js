import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MyPic from "@/app/assets/images/mypic.jpg";
const AboutSection = () => {
  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } },
  };

  const imageVariants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
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
                Hi there! I'm Umesh Mathulkar, a full-stack web developer with a
                passion for crafting exceptional digital experiences. With
                expertise spanning both front-end and back-end technologies, I
                strive to create seamless, user-centric applications that blend
                functionality and aesthetics.
              </p>
              <p>
                Armed with a Bachelor's degree in Technology from Government
                College of Engineering, Jalgaon, and a Full Stack Web
                Development Program certification, I possess a strong foundation
                in web development principles and practices. My journey is
                fueled by a relentless pursuit of knowledge, allowing me to stay
                ahead of the curve and deliver innovative solutions that address
                real-world challenges.
              </p>
             
              <div className="bg-gray-700 rounded-lg p-6">
              
                <p>
                  My skillset includes proficiency in front-end technologies
                  such as HTML, CSS, JavaScript, React, Next.js, Bootstrap,
                  Tailwind CSS, and Material UI. On the back-end, I'm
                  well-versed in Node.js, Express, and database management
                  systems like MongoDB and MySQL. Additionally, I have
                  experience with tools like Git, GitHub, and Postman, enabling
                  me to streamline development workflows and collaborate
                  seamlessly with teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;

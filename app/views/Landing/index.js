'use client'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import FPic from '@/app/assets/images/fPic.jpg';
import Image from 'next/image';

export default function LandingPage() {
  const profileLinks = [
    {
      name: "Github",
      link: "https://github.com/Umesh-Mathulkar",
      icon: FaGithub
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/umesh-mathulkar/",
      icon: FaLinkedinIn
    },
    {
      name: "Email",
      link: "mailto:mathulkar98@gmail.com", 
      icon: FaEnvelope
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center justify-center min-h-screen bg-no-repeat bg-cover bg-fixed"
      style={{ backgroundImage: 'url(/path-to-your-unique-background.jpg)' }}
    >
      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-2xl"
      >
        <motion.div
        variants={itemVariants}
        transition={{ duration: 0.8 }}>
        <Image
          src={FPic}
          alt="Umesh Mathulkar"
          className="w-40 h-40 object-cover rounded-full mx-auto mt-[-3rem] border-4 border-white"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        />
        </motion.div>
        <motion.h1
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          variants={itemVariants}
        >
          Umesh Mathulkar
        </motion.h1>
        <motion.p
          className="text-xl my-4"
          variants={itemVariants}
        >
          Full Stack Web Developer
        </motion.p>
        <motion.p
          className="text-md mb-6"
          variants={itemVariants}
        >
          Crafting digital experiences that stand out.
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          variants={itemVariants}
        >
          {profileLinks.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className={`text-${profile.name.toLowerCase()}-600 hover:text-${profile.name.toLowerCase()}-800`}
            >
              <profile.icon  size={30} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

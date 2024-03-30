  'use client'

  import { motion } from 'framer-motion';
  import FPic from '@/app/assets/images/fPic.jpg';
  import Image from 'next/image';
import { profileLinks } from '@/app/assets/data/profileLinks';
import { containerVariants, itemVariants } from '../Variants/LandingVariants';

  export default function LandingPage() {
  

    
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col items-center justify-center min-h-screen"

      >
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center backdrop-filter backdrop-blur-lg p-8 rounded-xl md:shadow-2xl bg-gray-800"
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
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"
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

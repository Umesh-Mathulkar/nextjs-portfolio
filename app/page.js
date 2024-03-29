'use client'
import React, { useRef, useState, useCallback, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutSection from './views/About';
import LandingPage from './views/Landing';
import ProjectSection from './views/Projects';
import { debounce } from 'lodash';
import SideNav from './views/layout/SideNav';
import SkillsSection from './views/Skills';

const sectionVariants = {
  initial: { opacity: 0, scale: 0.8, y: 50 },
  enter: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 0.5, // Add a delay of 0.5 seconds before entering
    },
  },
  exit: {
    opacity: 0,
    scale: 1.1,
    y: -100,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const sections = {
  landing: <LandingPage />,
  about: <AboutSection />,
  skills: <SkillsSection/>,
  projects: <ProjectSection />,
 
};

const sectionOrder = ['landing', 'about','skills', 'projects'];

const Home = () => {
  const [currentSection, setCurrentSection] = useState('landing');
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const sectionsRefs = useRef({});
  const scrollTimeoutRef = useRef(null);

  const handleResize = useCallback(() => {
    const sectionsHeights = Object.entries(sectionsRefs.current).reduce(
      (acc, [key, ref]) => {
        if (ref) {
          acc[key] = ref.offsetHeight;
        }
        return acc;
      },
      {}
    );
    console.log('sectionsHeights:', sectionsHeights);
  }, []);

  useLayoutEffect(() => {
    const handleScroll = () => {
      scrollPositionRef.current = scrollRef.current.scrollTop;
    };

    const scrollElement = scrollRef.current;
    scrollElement.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const updateCurrentSection = useCallback(
    debounce((deltaY) => {
      if (isScrolling) return;
      setIsScrolling(true);
      const currentIndex = sectionOrder.indexOf(currentSection);
      const currentSectionRef = sectionsRefs.current[currentSection];
      if (currentSectionRef) {
        const currentSectionHeight = currentSectionRef.offsetHeight;
        const scrollPosition = scrollPositionRef.current;
        if (deltaY > 0) {
          // Scrolling down
          if (scrollPosition + window.innerHeight >= currentSectionHeight) {
            if (currentIndex < sectionOrder.length - 1) {
              const nextSection = sectionOrder[currentIndex + 1];
              setCurrentSection(nextSection);
              scrollRef.current.scrollTo(0, 0);
            }
          }
        } else {
          // Scrolling up
          if (scrollPosition <= 0) {
            if (currentIndex > 0) {
              const prevSection = sectionOrder[currentIndex - 1];
              setCurrentSection(prevSection);
              scrollRef.current.scrollTo(0, 0);
            }
          }
        }
      }
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 100);
    }, 100),
    [isScrolling, currentSection]
  );

  return (
      <div
    ref={scrollRef}
    onWheel={(event) => updateCurrentSection(event.deltaY)}
    className="no-scrollbar h-screen overflow-y-auto relative"
  >
    {/* <SideNav
      currentSection={currentSection}
      scrollToSection={(section) => {
        const sectionRef = sectionsRefs.current[section];
        if (sectionRef) {
          sectionRef.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    /> */}
      <AnimatePresence>
        <motion.div
          key={currentSection}
          variants={sectionVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {sections[currentSection]}
          <div
            ref={(ref) => (sectionsRefs.current[currentSection] = ref)}
            style={{ height: '100vh' }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
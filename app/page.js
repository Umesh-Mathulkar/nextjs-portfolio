'use client'
import React, { useEffect, useState, useRef } from 'react';
import LandingPage from "./views/Landing";
import AboutSection from "./views/About";
import SkillsSection from "./views/Skills";
import ProjectSection from "./views/Projects";
import SideNav from "./views/layout";
import ExperienceSection from './views/Experience';
import ContactSection from './views/Contact';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef({
    home: null,
    about: null,
    experience: null,
    skills: null,
    projects: null,
    contact: null,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const sectionPositions = Object.entries(sectionRefs.current).reduce((acc, [key, ref]) => {
        if (ref) {
          acc[key] = ref.offsetTop;
        }
        return acc;
      }, {});

      const scrolledSection = Object.entries(sectionPositions).reduce((currentSection, [sectionId, sectionPosition]) => {
        if (scrollPosition >= sectionPosition && scrollPosition < (sectionPositions[currentSection] || Infinity)) {
          return sectionId;
        }
        return currentSection;
      }, null);

      if (scrolledSection) {
        setActiveSection(scrolledSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs.current]);

  return (
    <div className="absolute bg-gray-700 ">
      <div className="fixed right-0 z-10">
        <SideNav activeSection={activeSection} />
      </div>
      <div ref={(ref) => (sectionRefs.current.home = ref)} id="home">
        <LandingPage />
      </div>
      <div ref={(ref) => (sectionRefs.current.about = ref)} id="about">
        <AboutSection />
      </div>
      <div ref={(ref) => (sectionRefs.current.projects = ref)} id="experience">
        <ExperienceSection />
      </div>
      <div ref={(ref) => (sectionRefs.current.skills = ref)} id="skills">
        <SkillsSection />
      </div>
      <div ref={(ref) => (sectionRefs.current.projects = ref)} id="projects">
        <ProjectSection />
      </div>
     
      <div ref={(ref) => (sectionRefs.current.contact = ref)} id="contact">
       <ContactSection/>
      </div>
    </div>
  );
}

export default Home;
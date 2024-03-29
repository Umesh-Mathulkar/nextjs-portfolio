import { debounce } from "lodash";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

const sectionOrder = ['landing', 'about', 'skills', 'projects'];



export const useScrollPosition = () => {
    
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
        delay: 0.5,
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
      debounce((delta) => {
        if (isScrolling) return;
        setIsScrolling(true);
        const currentIndex = sectionOrder.indexOf(currentSection);
        const currentSectionRef = sectionsRefs.current[currentSection];
        if (currentSectionRef) {
          const currentSectionHeight = currentSectionRef.offsetHeight;
          const scrollPosition = scrollPositionRef.current;
          if (delta > 0) {
            if (scrollPosition + window.innerHeight >= currentSectionHeight) {
              if (currentIndex < sectionOrder.length - 1) {
                const nextSection = sectionOrder[currentIndex + 1];
                setCurrentSection(nextSection);
                scrollRef.current.scrollTo(0, 0);
              }
            }
          } else {
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
  
    const handleScroll = useCallback((event) => {
      updateCurrentSection(event.deltaY);
    }, [updateCurrentSection]);
  
    const handleTouchStart = useCallback((event) => {
      const touchStartY = event.touches[0].clientY;
      const handleTouchMove = (event) => {
        const deltaY = event.touches[0].clientY - touchStartY;
        updateCurrentSection(deltaY);
      };
      const handleTouchEnd = () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }, [updateCurrentSection]);
  
    return { scrollRef, handleScroll, handleTouchStart, currentSection, sectionsRefs, sectionVariants };
  };
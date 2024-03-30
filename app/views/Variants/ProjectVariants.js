export const projectVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    whileHover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  export const pillVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        type: 'spring',
        stiffness: 300,
      },
    },
  };
export const skillVariants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };
  export  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } },
  };
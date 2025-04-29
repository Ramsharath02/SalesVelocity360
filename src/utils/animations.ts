// Animation utility functions for the application

export const fadeIn = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
});

export const staggerChildren = (staggerTime: number = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerTime
    }
  }
});

// We can add more animations as needed
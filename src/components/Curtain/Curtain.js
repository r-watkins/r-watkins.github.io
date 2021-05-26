// React imports
import React from 'react';

// Library imports
import { motion } from 'framer-motion';

// Style imports
import { Container } from './styles';

/**
 * Animated image that creates a screen for pages to transition.
 */
const Curtain = () => {
  return (
    <Container
      as={motion.div}
      initial={{ y: -100 }}
      animate={{
        y: '-100%',
        transitionEnd: {
          y: '100%',
        },
      }}
      exit={{ y: -100 }}
      transition={{ duration: 0.6 }}
      style={{ x: '-50%' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="1280"
        viewBox="0 0 1920 1280"
      >
        <path
          d="M0,.086,960-100,1920,.086V1180L960,1080,0,1180Z"
          transform="translate(0 100)"
        />
      </svg>
    </Container>
  );
};

export default Curtain;

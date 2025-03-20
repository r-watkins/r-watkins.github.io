// React imports
import React from 'react';

// Library imports
import { motion } from 'framer-motion';

// Style imports
import { Container, Cover } from './styles';

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
      transition={{
        duration: 0.4,
      }}
      style={{ x: '-50%' }}
    >
      <Cover />
    </Container>
  );
};

export default Curtain;

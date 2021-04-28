// React imports
import React from 'react';

// Library imports
import { motion } from 'framer-motion';

// Component imports
import Nav from '../../components/Nav';
import Cover from '../../components/Cover';

// Style imports
import { Container } from './styles';

/**
 * The main page.
 */
const Main = () => {
  return (
    <Container
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Nav selected="home" />
      <Cover />
    </Container>
  );
};

export default Main;

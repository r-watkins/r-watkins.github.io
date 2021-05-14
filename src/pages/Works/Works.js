// React imports
import React from 'react';

// Library imports
import { motion } from 'framer-motion';

// Component imports
import Grid from '../../components/Grid';

// Style imports
import { Container } from './styles';
import { Divider } from '../../components/common/Divider/styles';
import { Title } from '../../components/common/Title/styles';

/**
 * The selected works page.
 */
const Works = () => {
  return (
    <Container
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>
        <h3>Selected Works</h3>
        <Divider />
      </Title>

      <Grid />
    </Container>
  );
};

export default Works;

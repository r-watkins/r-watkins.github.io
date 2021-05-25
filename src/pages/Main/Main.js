// React imports
import React from 'react';

// Library imports

// Component imports
import Cover from '../../components/Cover';

// Style imports
import { Container } from './styles';
import Curtain from '../../components/Curtain';

/**
 * The main page.
 */
const Main = () => {
  return (
    <Container>
      <Curtain />

      <Cover />
    </Container>
  );
};

export default Main;

// React imports
import React from 'react';

// Library imports

// Component imports
import Grid from '../../components/Grid';

// Style imports
import { Container } from './styles';
import { Divider } from '../../components/common/Divider/styles';
import { Title } from '../../components/common/Title/styles';
import Curtain from '../../components/Curtain';

/**
 * The selected works page.
 */
const Works = () => {
  return (
    <Container>
      <Curtain />

      <Title>
        <h3>Selected Works</h3>
        <Divider />
      </Title>

      <Grid />
    </Container>
  );
};

export default Works;

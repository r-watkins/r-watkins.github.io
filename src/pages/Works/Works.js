// React imports
import React from 'react';

// Library imports

// Component imports
import Grid from '../../components/Grid';

// Style imports
import { Backdrop } from '../../components/common/Backdrop/styles';
import { Divider } from '../../components/common/Divider/styles';
import { Title } from '../../components/common/Title/styles';
import Curtain from '../../components/Curtain';
import background from '../../styles/images/backdrop-works.svg';

/**
 * The selected works page.
 */
const Works = () => {
  return (
    <Backdrop background={background}>
      <Curtain />

      <Title>
        <h3>Selected Works</h3>
        <Divider />
      </Title>

      <Grid />
    </Backdrop>
  );
};

export default Works;

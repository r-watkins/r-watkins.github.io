// React imports
import React from 'react';

// Library imports

// Component imports
import Cover from '../../components/Cover';

// Style imports
import { Backdrop } from '../../components/common/Backdrop/styles';
import Curtain from '../../components/Curtain';
import background from '../../styles/images/backdrop.svg';

/**
 * The main page.
 */
const Main = () => {
  return (
    <Backdrop background={background}>
      <Curtain />

      <Cover />
    </Backdrop>
  );
};

export default Main;

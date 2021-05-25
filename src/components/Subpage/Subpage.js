// React imports
import React, { useState, useEffect } from 'react';

// Library imports
import { useLocation, useParams } from 'react-router-dom';

// Component imports
import Subnav from '../Subnav';
import Curtain from '../../components/Curtain';
import WorkOne from '../../pages/subpages/Work01';
import WorkTwo from '../../pages/subpages/Work02';
import WorkThree from '../../pages/subpages/Work03';
import WorkFour from '../../pages/subpages/Work04';

// Style imports
import { useTheme } from 'styled-components';
import { Container, Row } from './styles';

/**
 * Subpage container for the works articles.
 */
const Subpage = () => {
  const location = useLocation();
  const { id } = useParams();
  const theme = useTheme();
  const breakpoint = theme.navBreak;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <Container>
      <Curtain />

      {width > breakpoint && <Subnav selected={location} />}

      <Row>
        <div aria-hidden="true"></div>

        {id === 'halt-and-catch-fire' && <WorkOne />}

        {id === 'innerspaces' && <WorkTwo />}

        {id === 'give-them-a-show' && <WorkThree />}

        {id === 'make-it-pop' && <WorkFour />}
      </Row>
    </Container>
  );
};

export default Subpage;

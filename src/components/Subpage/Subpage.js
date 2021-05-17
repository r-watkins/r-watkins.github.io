// React imports
import React, { useState, useEffect } from 'react';

// Library imports
import { useLocation, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// Component imports
import Subnav from '../Subnav';
import WorkOne from '../../pages/subpages/Work01';
import WorkTwo from '../../pages/subpages/Work02';
import WorkThree from '../../pages/subpages/Work03';
import WorkFour from '../../pages/subpages/Work04';

// Style imports
import { useTheme } from 'styled-components';
import { Container, Row } from './styles';
import { Divider } from '../../components/common/Divider/styles';
import { Title } from '../../components/common/Title/styles';

/**
 * Subpage container for the works articles.
 */
const Subpage = (props) => {
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
    <Container
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {width > breakpoint && <Subnav selected={location} />}

      {width < breakpoint && (
        <Title>
          <h3>Selected Works</h3>
          <Divider />
        </Title>
      )}

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

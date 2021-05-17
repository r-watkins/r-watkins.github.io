// React imports
import React from 'react';

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
import { Container, Row } from './styles';

/**
 * Subpage container for the works articles.
 */
const Subpage = (props) => {
  const location = useLocation();
  const { id } = useParams();

  return (
    <Container
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Subnav selected={location} />

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

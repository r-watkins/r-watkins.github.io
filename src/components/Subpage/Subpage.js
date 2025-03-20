// React imports
import React from 'react';

// Library imports
import { useLocation, useParams } from 'react-router';

// Component imports
import Subnav from '../Subnav';
import Curtain from '../../components/Curtain';
import WorkOne from '../../pages/subpages/Work01';
import WorkTwo from '../../pages/subpages/Work02';
import WorkThree from '../../pages/subpages/Work03';
import WorkFour from '../../pages/subpages/Work04';

// Style imports
import { Row } from './styles';
import { Backdrop } from '../../components/common/Backdrop/styles';
import background from '../../styles/images/backdrop-works-one.svg';

/**
 * Subpage container for the works articles.
 */
const Subpage = (props) => {
  const location = useLocation();
  const { id } = useParams();

  return (
    <Backdrop background={background}>
      <Curtain />

      {!props.breakpoint && <Subnav selected={location} />}

      <Row>
        <div aria-hidden="true"></div>

        {id === 'halt-and-catch-fire' && <WorkOne />}

        {id === 'innerspaces' && <WorkTwo />}

        {id === 'give-them-a-show' && <WorkThree />}

        {id === 'make-it-pop' && <WorkFour />}
      </Row>
    </Backdrop>
  );
};

export default Subpage;

// React imports
import React from 'react';

// Component imports

// Style imports
import { Container, PageLink } from './styles';

/**
 * Subnavigation list of selected works.
 */
const Subnav = (props) => {
  const { selected } = props;

  return (
    <Container>
      <PageLink
        to="/works/halt-and-catch-fire"
        selected={selected === 1 ? true : false}
      >
        01 Halt and Catch Fire
      </PageLink>

      <PageLink
        to="/works/innerspaces"
        selected={selected === 2 ? true : false}
      >
        02 Innerspaces
      </PageLink>

      <PageLink
        to="/works/give-them-a-show"
        selected={selected === 3 ? true : false}
      >
        03 Give Them a Show
      </PageLink>

      <PageLink
        to="/works/make-it-pop"
        selected={selected === 4 ? true : false}
      >
        04 Make It Pop
      </PageLink>
    </Container>
  );
};

export default Subnav;

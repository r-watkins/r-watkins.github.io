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
        to="/work/halt-and-catch-fire"
        selected={
          selected.pathname === '/work/halt-and-catch-fire' ? true : false
        }
      >
        01 Halt and Catch Fire
      </PageLink>

      <PageLink
        to="/work/innerspaces"
        selected={selected.pathname === '/work/innerspaces' ? true : false}
      >
        02 Innerspaces
      </PageLink>

      <PageLink
        to="/work/give-them-a-show"
        selected={selected.pathname === '/work/give-them-a-show' ? true : false}
      >
        03 Give Them a Show
      </PageLink>

      <PageLink
        to="/work/make-it-pop"
        selected={selected.pathname === '/work/make-it-pop' ? true : false}
      >
        04 Make It Pop
      </PageLink>
    </Container>
  );
};

export default Subnav;

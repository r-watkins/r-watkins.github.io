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
        selected={
          selected.pathname === '/works/halt-and-catch-fire' ? true : false
        }
      >
        01 Halt and Catch Fire
      </PageLink>

      <PageLink
        to="/works/innerspaces"
        selected={selected.pathname === '/works/innerspaces' ? true : false}
      >
        02 Innerspaces
      </PageLink>

      <PageLink
        to="/works/give-them-a-show"
        selected={
          selected.pathname === '/works/give-them-a-show' ? true : false
        }
      >
        03 Give Them a Show
      </PageLink>

      <PageLink
        to="/works/make-it-pop"
        selected={selected.pathname === '/works/make-it-pop' ? true : false}
      >
        04 Make It Pop
      </PageLink>
    </Container>
  );
};

export default Subnav;

// React imports
import React from 'react';

// Component imports

// Style imports
import { Container, PageLink } from './styles';

/**
 * Navigation bar
 */
const Nav = (props) => {
  const { selected } = props;

  return (
    <Container>
      <PageLink to="/" selected={selected === 'home' ? true : false}>
        Home
      </PageLink>
      <PageLink to="/works" selected={selected === 'works' ? true : false}>
        Works
      </PageLink>
      <PageLink to="/resume" selected={selected === 'resume' ? true : false}>
        Resume
      </PageLink>
      <PageLink to="/about" selected={selected === 'about' ? true : false}>
        About
      </PageLink>
    </Container>
  );
};

export default Nav;

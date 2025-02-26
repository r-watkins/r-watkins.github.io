// React imports
import React from 'react';

// Component imports
import { matchPath } from 'react-router';
import Drawer from '../Drawer';

// Style imports
import { Container, PageLink } from './styles';

/**
 * Navigation bar
 */
const Nav = (props) => {
  const { selected } = props;

  const resolveWorksPath = (path) => {
    const workspath = matchPath({
      path: '/work/:id',
      exact: true,
      strict: false,
    }, path);

    if (workspath || path === '/works') {
      return true;
    }

    return false;
  };

  return props.breakpoint === false ? (
    <Container>
      <PageLink to="/" selected={selected.pathname === '/' ? true : false}>
        Home
      </PageLink>

      <PageLink
        to="/works"
        selected={resolveWorksPath(selected.pathname) ? true : false}
      >
        Works
      </PageLink>

      <PageLink
        to="/resume"
        selected={selected.pathname === '/resume' ? true : false}
      >
        Resume
      </PageLink>

      <PageLink
        to="/about"
        selected={selected.pathname === '/about' ? true : false}
      >
        About
      </PageLink>
    </Container>
  ) : (
    <Drawer selected={selected} />
  );
};

export default Nav;

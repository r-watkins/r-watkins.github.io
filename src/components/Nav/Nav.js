// React imports
import React, { useState, useEffect } from 'react';

// Component imports
import { matchPath } from 'react-router';
import Drawer from '../Drawer';

// Style imports
import { useTheme } from 'styled-components';
import { Container, PageLink } from './styles';

/**
 * Navigation bar
 */
const Nav = (props) => {
  const { selected } = props;
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

  const resolveWorksPath = (path) => {
    const workspath = matchPath(path, {
      path: '/works/:id',
      exact: true,
      strict: false,
    });

    if (workspath || path === '/works') {
      return true;
    }

    return false;
  };

  return parseInt(width) > breakpoint ? (
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

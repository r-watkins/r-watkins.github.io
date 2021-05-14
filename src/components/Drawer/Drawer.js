// React imports
import React, { useState } from 'react';

// Component imports
import { AnimatePresence, motion } from 'framer-motion';

// Style imports
import {
  MenuButton,
  CloseButton,
  Scrim,
  Container,
  Nav,
  PageLink,
  SubPageLink,
} from './styles';
import { ReactComponent as MenuIcon } from '../../styles/images/menu.svg';
import { ReactComponent as BackIcon } from '../../styles/images/backburger.svg';

/**
 * Navigation Menu Drawer for Mobile
 */
const Drawer = (props) => {
  const { selected } = props;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuButton onClick={handleOpen}>
        <MenuIcon />
      </MenuButton>

      <AnimatePresence exitBeforeEnter initial={false}>
        {open && (
          <Scrim
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence exitBeforeEnter initial={false}>
        {open && (
          <Container
            as={motion.nav}
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.2 }}
          >
            <CloseButton onClick={handleClose}>
              <BackIcon />
            </CloseButton>

            <Nav>
              <PageLink
                to="/"
                selected={selected.pathname === '/' ? true : false}
                onClick={handleClose}
              >
                Home
              </PageLink>

              <PageLink
                to="/works"
                selected={selected.pathname === '/works' ? true : false}
                onClick={handleClose}
              >
                Works
              </PageLink>

              <SubPageLink
                to="/works/halt-and-catch-fire"
                selected={
                  selected === '/works/halt-and-catch-fire' ? true : false
                }
                onClick={handleClose}
              >
                01 Halt and Catch Fire
              </SubPageLink>

              <SubPageLink
                to="/works/innerspaces"
                selected={selected === '/works/innerspaces' ? true : false}
                onClick={handleClose}
              >
                02 Innerspaces
              </SubPageLink>

              <SubPageLink
                to="/works/give-them-a-show"
                selected={selected === '/works/give-them-a-show' ? true : false}
                onClick={handleClose}
              >
                03 Give Them a Show
              </SubPageLink>

              <SubPageLink
                to="/works/make-it-pop"
                selected={selected === '/works/make-it-pop' ? true : false}
                onClick={handleClose}
              >
                04 Make It Pop
              </SubPageLink>

              <PageLink
                to="/resume"
                selected={selected.pathname === '/resume' ? true : false}
                onClick={handleClose}
              >
                Resume
              </PageLink>

              <PageLink
                to="/about"
                selected={selected.pathname === '/about' ? true : false}
                onClick={handleClose}
              >
                About
              </PageLink>
            </Nav>
          </Container>
        )}
      </AnimatePresence>
    </>
  );
};

export default Drawer;

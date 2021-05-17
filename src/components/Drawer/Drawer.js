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
  Menu,
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
      <Container>
        <MenuButton onClick={handleOpen}>
          <MenuIcon />
        </MenuButton>
      </Container>

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
          <Menu
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
                to="/work/halt-and-catch-fire"
                selected={
                  selected.pathname === '/work/halt-and-catch-fire'
                    ? true
                    : false
                }
                onClick={handleClose}
              >
                01 Halt and Catch Fire
              </SubPageLink>

              <SubPageLink
                to="/work/innerspaces"
                selected={
                  selected.pathname === '/work/innerspaces' ? true : false
                }
                onClick={handleClose}
              >
                02 Innerspaces
              </SubPageLink>

              <SubPageLink
                to="/work/give-them-a-show"
                selected={
                  selected.pathname === '/work/give-them-a-show' ? true : false
                }
                onClick={handleClose}
              >
                03 Give Them a Show
              </SubPageLink>

              <SubPageLink
                to="/work/make-it-pop"
                selected={
                  selected.pathname === '/work/make-it-pop' ? true : false
                }
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
          </Menu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Drawer;

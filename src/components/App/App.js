// React imports
import React, { useState, useEffect } from 'react';

// Library imports
import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';

// Component imports
import Nav from '../Nav';
import Main from '../../pages/Main';
import Works from '../../pages/Works';
import Resume from '../../pages/Resume';
import About from '../../pages/About';
import Subpage from '../Subpage';

// Style imports
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { GlobalStyle } from '../../styles/global';
import '../../styles/font.css';

/**
 * App root.
 */
function App() {
  const location = useLocation();
  const breakpoint = theme.navBreak;

  const [navBreak, setNavBreak] = useState(
    window.innerWidth <= breakpoint ? true : false
  );

  useEffect(() => {
    const handleWindowResize = () => {
      setNavBreak(window.innerWidth <= breakpoint ? true : false);
    };
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [breakpoint]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Nav selected={location} breakpoint={navBreak} />

      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Main />} />

          <Route path="/works" element={<Works />} />

          <Route
            path="/work/:id"
            element={<Subpage breakpoint={navBreak} />}
          />

          <Route path="/resume" element={<Resume />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;

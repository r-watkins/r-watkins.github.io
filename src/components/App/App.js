// React imports
import React from 'react';

// Library imports
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Component imports
import Nav from '../Nav';
import Main from '../../pages/Main';
import Works from '../../pages/Works';
import Resume from '../../pages/Resume';
import About from '../../pages/About';
import WorkOne from '../../pages/Works/subpages/WorkOne';
import WorkTwo from '../../pages/Works/subpages/WorkTwo';
import WorkThree from '../../pages/Works/subpages/WorkThree';
import WorkFour from '../../pages/Works/subpages/WorkFour';

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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Nav selected={location} />

      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Main} />

          <Route exact path="/works" component={Works} />

          <Route exact path="/works/halt-and-catch-fire" component={WorkOne} />

          <Route exact path="/works/innerspaces" component={WorkTwo} />

          <Route exact path="/works/give-them-a-show" component={WorkThree} />

          <Route exact path="/works/make-it-pop" component={WorkFour} />

          <Route path="/resume" component={Resume} />

          <Route path="/about" component={About} />
        </Switch>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;

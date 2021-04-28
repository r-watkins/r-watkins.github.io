// React imports
import React from 'react';

// Library imports
import { motion } from 'framer-motion';

// Component imports
import Nav from '../../../../components/Nav';
import Subnav from '../../../../components/Subnav';
import Article from '../../../../components/Article';

// Style imports
import { Container, Row, Image, Video } from './styles';
import FirstImage from './images/image01.png';
import SecondImage from './images/image02.png';
import VideoClip from './images/video.mp4';

/**
 * The selected works page.
 */
const WorkFour = () => {
  return (
    <Container
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Nav selected="works" />
      <Subnav selected={4} />

      <Row>
        <div aria-hidden="true"></div>

        <Article title="Make It Pop" subtext="US DoD Foglift">
          <h6>In the Dark</h6>

          <br />

          <p>
            I was contracted by a US DoD client to design and develop the UI for
            a small app codenamed Foglift, whose purpose was to display other
            applications in a branded presentational environment. The client
            gave very little input. They had no branding requirements and were
            ready to accept my interpretation. They simply said, “Wow me.”
          </p>

          <br />

          <figure>
            <Image src={FirstImage} alt="Foglift splash page" />

            <figcaption>US DoD Foglift / Splash page</figcaption>
          </figure>

          <br />

          <h6>Improvise and adapt</h6>

          <br />

          <p>
            I wanted to make animated transitions a priority for the project.
            Animation is known to effectively increase attention and engagement
            in software UI and would be my best bet to “wow” a client. I
            initially set-up to use Framer-Motion, a powerful and intuitive
            animation library, but it was quickly shot down. The app needed to
            run in a disconnected environment and the dependency approval was
            strict. We weren’t going to get Framer-Motion approved in time so I
            pivoted and wrote the animations by hand with the help of Material
            UI in React.
          </p>

          <br />

          <figure>
            <Image src={SecondImage} alt="Foglift main page" />

            <figcaption>US DoD Foglift / Main page</figcaption>
          </figure>

          <br />

          <p>
            The produced UI was met with great enthusiasm by the client. I wrote
            the prototype code to be production ready so it was pulled directly
            into the production build with little to no effort.
          </p>

          <br />

          <Video muted autoPlay loop>
            <source src={VideoClip} type="video/mp4" />
          </Video>
          <figcaption>US DoD Foglift / Animations</figcaption>

          <br />
        </Article>
      </Row>
    </Container>
  );
};

export default WorkFour;

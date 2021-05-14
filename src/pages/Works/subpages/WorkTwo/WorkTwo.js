// React imports
import React from 'react';

// Library imports
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Component imports
import Subnav from '../../../../components/Subnav';
import Article from '../../../../components/Article';

// Style imports
import { Container, Row, Image } from './styles';
import FirstImage from './images/image01.png';
import SecondImage from './images/image02.jpg';
import ThirdImage from './images/image03.png';
import FourthImage from './images/image04.png';
import FifthImage from './images/image05.png';

/**
 * The selected works page.
 */
const WorkTwo = () => {
  const location = useLocation();

  return (
    <Container
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Subnav selected={location} />

      <Row>
        <div aria-hidden="true"></div>

        <Article title="Innerspaces" subtext="ArcGIS Indoors Spaceplanner">
          <h6>Creating new spaces</h6>

          <br />

          <p>
            The ArcGIS Indoors team was in the design phase for a new companion
            app to Indoors called Spaceplanner. Spaceplanner would be an
            administrative tool used to manage building, room and office
            occupancy. The team needed to make the deadline for a recent release
            of ArcGIS Pro so they called me in to help develop the UI.
          </p>

          <br />

          <figure>
            <Image src={FirstImage} alt="Indoors Spaceplanner" />

            <figcaption>ArcGIS Indoors Spaceplanner / Main view</figcaption>
          </figure>

          <br />

          <h6>Planning and Building</h6>

          <br />

          <p>
            The solution was built on ReactJS and used the new Calcite-React
            which was becoming the preferred component library over Material UI
            in Professional Services. At this point I was seasoned in both and
            very comfortable in working with the technology.
          </p>

          <br />

          <p>
            The biggest challenge for this project was the designs were still in
            a wireframe stage. The designer and developers had to work very
            closely to reveal and implement the styles and workflows as we
            progressed.
          </p>

          <br />

          <figure>
            <Image src={SecondImage} alt="Spaceplanner wireframe design" />

            <figcaption>ArcGIS Indoors Spaceplanner wireframe</figcaption>
          </figure>

          <br />

          <h6>Standing out</h6>

          <br />

          <p>
            I was one of three UI developers on the project. I immediately
            identified a need to unify the styling system of the project. The
            current solution was written in a mix of plain CSS and Sass. I made
            the call that they switch to styled-components and began work on
            replacing the old styles with the new. I knew Calcite-React was
            written with styled-components so their integration was simple and
            seamless.
          </p>

          <br />

          <figure>
            <Image src={ThirdImage} alt="Spaceplanner left panel open" />

            <figcaption>ArcGIS Indoors Spaceplanner / Left panel</figcaption>
          </figure>

          <br />

          <p>
            My other responsibilities were to build the right panel complete
            with search, filter and sorting capability. The cards also needed to
            show a color code for empty and occupied.
          </p>

          <br />

          <figure>
            <Image src={FourthImage} alt="Spaceplanner right panel open" />

            <figcaption>ArcGIS Indoors Spaceplanner / Right panel</figcaption>
          </figure>

          <br />

          <p>
            There were layout issues having a right and left drawer panel
            initially and I took charge rewriting the layout to scale properly,
            especially on smaller screens. The initial design also had a
            floating header which also couldn’t scale properly given its
            children elements. I helped rework the header into a more
            sustainable design.
          </p>

          <br />

          <figure>
            <Image src={FifthImage} alt="Spaceplanner open UI" />

            <figcaption>
              ArcGIS Indoors Spaceplanner / Open project UI
            </figcaption>
          </figure>

          <br />

          <p>
            In the end, we made the deadline with a beautiful and useable
            solution.
          </p>

          <br />
        </Article>
      </Row>
    </Container>
  );
};

export default WorkTwo;

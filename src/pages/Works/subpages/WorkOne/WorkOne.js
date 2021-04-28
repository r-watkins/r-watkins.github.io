// React imports
import React from 'react';

// Library imports
import { motion } from 'framer-motion';

// Component imports
import Nav from '../../../../components/Nav';
import Subnav from '../../../../components/Subnav';
import Article from '../../../../components/Article';

// Style imports
import { Container, Row, Image } from './styles';
import FirstImage from './images/image01.png';
import SecondImage from './images/image02.jpg';
import ThirdImage from './images/image03.png';
import FourthImage from './images/image04.jpg';
import FifthImage from './images/image05.jpg';

/**
 * The selected works page.
 */
const WorkOne = () => {
  return (
    <Container
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Nav selected="works" />
      <Subnav selected={1} />

      <Row>
        <div aria-hidden="true"></div>

        <Article
          title="Halt and Catch Fire"
          subtext="Integrated Reporting of Wildland-Fire Information (IRWIN) App Suite"
        >
          <h6>Seeking Unity</h6>

          <br />

          <p>
            The US DOI’s IRWIN set out to solve the problem of how to integrate
            the many firefighting agencies’ wildfire data into a single system.
            The DOI needed to know about and keep track of the historical
            records of wildfire incidents while firefighter agencies needed to
            track and deploy resources across the nation where needed. Every
            agency used a slightly different system for tracking their data so
            the solution needed to unify them all while also being flexible.
          </p>

          <br />

          <figure>
            <Image src={FirstImage} alt="Observer application" />

            <figcaption>IRWIN Observer / Main view</figcaption>
          </figure>

          <br />

          <h6>Kicking Things Off</h6>

          <br />

          <p>
            IRWIN created their flagship application, Observer, with the help of
            Esri’s Professional Services. Observer was created to monitor the
            incoming data from all the systems and create a historical overview
            of wildfire incidents. The app was built on ReactJS for the view,
            Redux for advanced state management and Material UI as a component
            library. Material UI was customized and themed via styled-components
            (CSS-in-JS) so it was in alignment with the Calcite-Web system.
          </p>

          <br />

          <p>
            Observer was handed over to me as my first React project with the
            accompanying technologies also being new. I would be the lead
            front-end engineer and designer on the project moving forward. My
            first task was to learn the tech and put it to work by designing and
            implementing the UI for a new data relation of resource history. The
            app had lots of custom components to work with, combine and
            reengineer to purpose for the task. The solution was a filterable
            table that highlighted changes that happened since the last login
            session.
          </p>

          <br />

          <figure>
            <Image src={SecondImage} alt="New Observer application UI" />

            <figcaption>IRWIN Observer / Resource history</figcaption>
          </figure>

          <br />

          <h6>Advancing the Workflow</h6>

          <br />

          <p>
            Observer was only the beginning. The power of the integrated system
            was in the concept of managing firefighting resources by assigning
            them to incidents that were entered into the database. I went to
            work with the client designing their next application workflow and
            UI called Roll Call. We worked in an Agile development cycle with
            regular reviews and iterations of the designs.
          </p>

          <br />

          <figure>
            <Image src={ThirdImage} alt="Roll Call application" />

            <figcaption>IRWIN Roll Call / Main view</figcaption>
          </figure>

          <br />

          <p>
            When we agreed on the base wireframe for Roll Call I set out to
            build its entire front-end from scratch. We had the idea that
            drag-and-drop would be the most convenient and user-friendly method
            to interact with the app but later found out that full keyboard
            control was more desirable and accessible. We pivoted away from
            drag-and-drop mechanics and built meaningful buttons and keyboard
            tab flows to make this possible.
          </p>

          <br />

          <figure>
            <Image src={FourthImage} alt="Roll Call list builder" />

            <figcaption>IRWIN Roll Call / Resource liist builder</figcaption>
          </figure>

          <br />

          <p>
            With Roll Call in the works we needed to add in some much needed
            flexibility to the system. I then began work on designing and
            developing the final app, Director. Director would give key
            administrative staff the ability to edit and resubmit data that was
            already captured by IRWIN.
          </p>

          <br />

          <figure>
            <Image src={FifthImage} alt="Director application" />

            <figcaption>IRWIN Director</figcaption>
          </figure>

          <br />

          <p>
            It was at this point that we realized the work that needed to be
            completed was more than what a single person could accomplish and we
            brought on another front-end developer that would work under my
            direction.
          </p>

          <br />

          <h6>After All Our Hard Work</h6>

          <br />

          <p>
            The IRWIN apps had scaled to new heights when all the apps became
            feature complete. They needed a larger force of engineers to manage
            the system now and let’s face it, Esri is pricey. In the end, IRWIN
            hired a contracting group to take over the maintenance and feature
            enhancements of Observer, Roll Call and Director. I transferred all
            knowledge of the front-end to the contracting group for a smooth
            transfer.
          </p>

          <br />

          <p>
            The IRWIN apps are marked as the catalyst andstarting point of
            Calcite-React.
          </p>

          <br />
        </Article>
      </Row>
    </Container>
  );
};

export default WorkOne;

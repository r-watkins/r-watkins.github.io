// React imports
import React from 'react';

// Library imports
import { motion } from 'framer-motion';

// Component imports

// Style imports
import {
  Container,
  Article,
  Header,
  Divider,
  Info,
  Print,
  Icon,
  Section,
  SectionTitle,
  SectionBlock,
  SectionBlockHeader,
} from './styles';
import PrintIcon from '../../styles/images/print-icon.svg';

import Document from '../../assets/Resume.pdf';

/**
 * The main page.
 */
const Resume = () => {
  return (
    <Container
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Article>
        <Header>
          <div>
            <h3>Ryan Watkins</h3>
            <Divider />
            <h4>UI/UX Engineer</h4>
          </div>

          <Info>
            <Print href={Document}>
              <Icon src={PrintIcon} alt="Print Link Icon"></Icon>
              <p>Print</p>
            </Print>

            <div>
              <p>rwatkins@esri.com</p>
              <p>909 793 2853 x5012</p>
            </div>
          </Info>
        </Header>

        <Section>
          <SectionTitle>Experience</SectionTitle>

          <div>
            <SectionBlock>
              <p>March 2016 - Current</p>

              <SectionBlockHeader>
                <strong>UI/UX Engineer</strong>{' '}
                <i>/ Esri Professional Services</i>
              </SectionBlockHeader>

              <p>
                Work with Esri’s professional clients to consult, design and
                develop user experiences and user interfaces.
              </p>

              <br />

              <p>
                Establish a knowledge base and create reusable patterns for the
                UI/UX Tech Center and clients.
              </p>

              <br />

              <p>
                Share knowledge and experience of current development techniques
                with clients and the rest of the Professional Services
                department.
              </p>

              <br />

              <p>
                Mentor incoming UI/UX hires on the company’s and tech center’s
                logistics and expectations.
              </p>
            </SectionBlock>

            <SectionBlock>
              <p>October 2015 - March 2016</p>

              <SectionBlockHeader>
                <strong>Front-End Developer</strong> <i>/ Haven Agency</i>
              </SectionBlockHeader>

              <p>
                Implement the UI and front-end of complexly designed and highly
                available webpages for clients.
              </p>

              <br />

              <p>
                Contribute ideas and development to an in-house UI framework.
              </p>

              <br />

              <p>Engage in regular code reviews of project work.</p>
            </SectionBlock>

            <SectionBlock nogutter>
              <p>December 2014 - October 2015</p>

              <SectionBlockHeader>
                <strong>UI Developer</strong> <i>/ Neustar Marketshare</i>
              </SectionBlockHeader>

              <p>
                Prototype and implement the UI for the major release, fully
                redesigned flagship product suite.
              </p>

              <br />

              <p>Maintain the UI of the older versions of the product suite.</p>

              <br />

              <p>
                Work in an Agile environment with regular peer code reviews.
              </p>
            </SectionBlock>
          </div>
        </Section>

        <Section>
          <SectionTitle>Select Projects</SectionTitle>

          <div>
            <SectionBlock>
              <p>2021</p>

              <SectionBlockHeader>
                <strong>US DoD STRATCOM</strong>{' '}
                <i>/ Lead Designer and UI Developer</i>
              </SectionBlockHeader>

              <p>
                Developing a full custom web interface for US STRATCOM in
                ReactJS using Material UI and Calcite UI Icons. The solution
                heavily utilizes the ArcGIS JS API and is capable of running in
                multiple browser windows.
              </p>
            </SectionBlock>

            <SectionBlock>
              <p>2021</p>

              <SectionBlockHeader>
                <strong>US DoD FOGLIFT</strong>{' '}
                <i>/ Designer and UI Developer</i>
              </SectionBlockHeader>

              <p>
                Designed and developed a prototype UI for a US DoD client to
                present embedded web applications in a branded environment. The
                prototype was accepted and the prototype code was promoted to
                the production implementation and deployment. The prototype was
                built in ReactJS with Material UI components.
              </p>
            </SectionBlock>

            <SectionBlock>
              <p>2021</p>

              <SectionBlockHeader>
                <strong>Airborne Snow Observatories</strong>{' '}
                <i>/ UI Developer</i>
              </SectionBlockHeader>

              <p>
                Was brought onto the team as an expert in functional layouts to
                write the page layouts for the project. The solution was created
                with Svelte and used Calcite Components.
              </p>
            </SectionBlock>

            <SectionBlock>
              <p>2020</p>

              <SectionBlockHeader>
                <strong>ArcGIS Indoors Spaceplanner</strong>{' '}
                <i>/ UI Developer</i>
              </SectionBlockHeader>

              <p>
                Developed the UI for an administrative application to ArcGIS
                Indoors called Spaceplanner. Worked with the designer to
                implement the UI to specification and worked along other
                developers to meet a tight deadline for release. The solution
                was built on ReactJS with Calcite-React and Styled-Components
                for customizations.
              </p>
            </SectionBlock>

            <SectionBlock>
              <p>2020</p>

              <SectionBlockHeader>
                <strong>UAE Government of Oman</strong>{' '}
                <i>/ Designer and UI Developer</i>
              </SectionBlockHeader>

              <p>
                Designed and implemented the UI for a dashboard web application
                that monitored the trade between Oman and other countries. The
                solution utilized the ArcGIS JS API and ArcGIS Rest JS with
                ReactJS and Material UI components.
              </p>
            </SectionBlock>

            <SectionBlock>
              <p>2019</p>

              <SectionBlockHeader>
                <strong>IRWIN App Suite</strong>{' '}
                <i>/ Designer and Lead Front-End Developer</i>
              </SectionBlockHeader>

              <p>
                Contributed to the design and development of three web
                applications called Observer, Roll Call and Director. Designed,
                developed and deployed new features for Observer while
                maintaining the original code base and directing one other
                developer. Designed, developed and deployed the front-end for
                brand new apps Roll Call and Director. The solution was built in
                ReactJS with Redux and Material UI components.
              </p>
            </SectionBlock>

            <SectionBlock nogutter>
              <p>2019</p>

              <SectionBlockHeader>
                <strong>GIC Visual Inspection Studio</strong>{' '}
                <i>/ Designer and UI Developer</i>
              </SectionBlockHeader>

              <p>
                Inherited and enhanced designs for the insurance based, high
                definition imaging web application. Developed the user interface
                that was then shown at that years Esri User Conference. The
                solution was built on ReactJS with Calcite-React components and
                Styled-Components for customizations.
              </p>
            </SectionBlock>
          </div>
        </Section>

        <Section>
          <SectionTitle>Presentations</SectionTitle>

          <div>
            <SectionBlock>
              <p>2020 - 2021</p>

              <SectionBlockHeader>
                <strong>Layouts with CSS Flex and Grid</strong>
                <br />
                <i>Professional Services Developer Community</i>
                <br />
                <i>Esri Global Distributer Workshop</i>
              </SectionBlockHeader>
            </SectionBlock>

            <SectionBlock>
              <p>2019</p>

              <SectionBlockHeader>
                <strong>
                  Bootstrap your React Apps for the ArcGIS API for JavaScript
                </strong>
                <br />
                <i>Esri Developer Summit</i>
              </SectionBlockHeader>
            </SectionBlock>

            <SectionBlock nogutter>
              <p>2019</p>

              <SectionBlockHeader>
                <strong>CSS Layouts</strong>
                <br />
                <i>Professional Services Developer Workshop</i>
              </SectionBlockHeader>
            </SectionBlock>
          </div>
        </Section>

        <Section>
          <SectionTitle>Publications</SectionTitle>

          <div>
            <SectionBlock nogutter>
              <p>2016</p>

              <SectionBlockHeader>
                <strong>
                  Procedural Content Generation for Unity Game Development
                </strong>
                <br />
                <i>Packt Publishing</i>
                <br />
                <i>ISBN - 9781785287473</i>
              </SectionBlockHeader>
            </SectionBlock>
          </div>
        </Section>

        <Section>
          <SectionTitle>Education</SectionTitle>

          <div>
            <SectionBlock>
              <p>2011 - 2014</p>

              <SectionBlockHeader>
                <strong>B.S. Computer Science</strong>
                <br />
                <i>University of California - Riverside</i>
              </SectionBlockHeader>
            </SectionBlock>

            <SectionBlock nogutter>
              <p>2007 - 2009</p>

              <SectionBlockHeader>
                <strong>Game Art &amp; Design</strong>
                <br />
                <i>The Art Institute of California - Los Angeles</i>
              </SectionBlockHeader>
            </SectionBlock>
          </div>
        </Section>

        <Section>
          <SectionTitle>Skills</SectionTitle>

          <div>
            <ul>
              <li>HTML, CSS, JavaScript, TypeScript, C#</li>
              <li>ArcGIS JS API, ArcGIS Rest JS</li>
              <li>ArcGIS Web Appbuilder, ArcGIS Experience Builder</li>
              <li>React, Svelte, Redux, Unity3D</li>
              <li>Node, NPM</li>
              <li>Git, Github</li>
              <li>
                Adobe Photoshop, Adobe Illustrator, Adobe XD, Sketch, Figma
              </li>
              <li>Agile Development</li>
            </ul>
          </div>
        </Section>
      </Article>
    </Container>
  );
};

export default Resume;

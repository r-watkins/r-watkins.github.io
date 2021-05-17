// React imports
import React from 'react';

// Library imports

// Component imports

// Style imports
import {
  Container,
  Card,
  CardBody,
  Number,
  CardSubTitle,
  Divider,
} from './styles';

/**
 * The selected works page.
 */
const Works = () => {
  return (
    <Container>
      <Card to="/work/halt-and-catch-fire">
        <CardBody>
          <Number>01</Number>
          <div>
            <h4>Halt and Catch Fire</h4>
            <CardSubTitle>IRWIN App Suite</CardSubTitle>
          </div>
        </CardBody>
        <Divider className="underline" />
      </Card>

      <Card to="/work/innerspaces">
        <CardBody>
          <Number>02</Number>
          <div>
            <h4>Innerspaces</h4>
            <CardSubTitle>ArcGIS Indoors Spaceplanner</CardSubTitle>
          </div>
        </CardBody>
        <Divider className="underline" />
      </Card>

      <Card to="/work/give-them-a-show">
        <CardBody>
          <Number>03</Number>
          <div>
            <h4>Give Them a Show</h4>
            <CardSubTitle>Calcite UI Icons React</CardSubTitle>
          </div>
        </CardBody>
        <Divider className="underline" />
      </Card>

      <Card to="/work/make-it-pop">
        <CardBody>
          <Number>04</Number>
          <div>
            <h4>Make It Pop</h4>
            <CardSubTitle>US DoD Foglift</CardSubTitle>
          </div>
        </CardBody>
        <Divider className="underline" />
      </Card>
    </Container>
  );
};

export default Works;

// React imports
import React from 'react';

// Component imports

// Style imports
import {
  Container,
  Title,
  Name,
  Job,
  Icon,
  Divider,
  Portrait,
  Image,
  Circle,
} from './styles';
import Frame from '../../styles/images/frame.svg';
import Picture from '../../styles/images/portrait.png';
import Plus from '../../styles/images/plus.svg';

/**
 * The main page.
 */
const Cover = () => {
  return (
    <Container>
      <Title>
        <Name>Ryan Watkins</Name>

        <Divider />

        <Job>
          UI Engineer
          <Icon src={Plus} alt="Plus sign representing and" />
          Designer
        </Job>
      </Title>

      <Portrait>
        <img src={Frame} alt="Portrait of Ryan Watkins frame" />

        <Circle>
          <Image src={Picture} alt="Portrait of Ryan Watkins" />
        </Circle>
      </Portrait>
    </Container>
  );
};

export default Cover;

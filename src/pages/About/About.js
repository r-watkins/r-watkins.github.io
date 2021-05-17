// React imports
import React from 'react';

// Library imports
import { motion } from 'framer-motion';

// Component imports

// Style imports
import { Container, Content, Images, Image } from './styles';
import { Title } from '../../components/common/Title/styles';
import { Divider } from '../../components/common/Divider/styles';
import Photo from '../../styles/images/photo01.jpg';
import Frame from '../../styles/images/photo-frame.svg';

/**
 * The about page.
 */
const About = () => {
  return (
    <Container
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>
        <h3>About</h3>
        <Divider />
      </Title>

      <Content>
        <p>
          Ryan has spent his entire 7+ year career dedicated to crafting
          user-centered, accessible and beautiful user interfaces. With an
          educational background in art, design and computer science he works
          seamlessly between the aesthetic and the technical. He is passionate
          about his work and cares deeply about his client’s stories and the
          problems they are trying to solve. When he’s not writing code for UI
          you can find him working on his next digital illustration or playing a
          game with family &amp; friends.
        </p>

        <Images>
          <img src={Frame} alt="Frame" />

          <Image src={Photo} alt="Ryan Watkins" />
        </Images>
      </Content>
    </Container>
  );
};

export default About;
